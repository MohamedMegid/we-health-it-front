<template>
  <div>
    <Dialog
      :visible.sync="displayDialogCoverImage"
      :modal="true"
      :style="{ width: '50vw' }"
    >
      <cropper
        ref="coverCropper"
        :auto-zoom="true"
        :stencil-props="{
          movable: true,
          scalable: true,
          aspectRatio: 2 / 1,
        }"
        :resize-image="{
          adjustStencil: false,
        }"
        image-restriction="stencil"
        :src="editImages.cover"
      />
      <template #footer>
        <Button
          label="Save"
          class="p-button-rounded py-3 mt-3 px-5"
          @click="SaveConverImage"
        />
      </template>
    </Dialog>
    <div class="profile-images">
      <div
        class="cover-pic"
        :class="{ 'border-error': $v.images.profileImages.cover.$invalid }"
      >
        <img :src="imageURLs.cover" />
        <div class="cover-pic-icon">
          <!-- @input="getCoverPic" -->
          <input
            @change="getCoverInputImage"
            type="file"
            accept="image/*"
            id="upload-cover-pic"
            hidden
          />
          <label for="upload-cover-pic">
            <i
              class="fa fa-camera"
              data-bs-original-title="fa fa-camera"
              aria-label="fa fa-camera"
            ></i>
          </label>
          <label
            v-if="editImages.cover"
            @click="displayDialogCoverImage = true"
          >
            <i class="fa fa-pencil" aria-hidden="true"></i>

          
          </label>
        </div>
      </div>
      <div
        class="profile-pic"
        :class="{ 'border-error': $v.images.profileImages.profile.$invalid }"
      >
        <img :src="imageURLs.profile" />
        <div class="profile-pic-icon">
          <input
            @input="getProfilePic"
            type="file"
            accept="image/*"
            id="upload-profile-pic"
            hidden
          />
          <label for="upload-profile-pic">
           <i
              class="fa fa-camera"
              data-bs-original-title="fa fa-camera"
              aria-label="fa fa-camera"
            ></i>          </label>
        </div>
      </div>
    </div>
    <div class="errors text-center mt-5">
      <small
        class="text-error"
        v-if="
          !$v.images.profileImages.profile.imageType ||
          !$v.images.profileImages.cover.imageType
        "
      >
        {{ errors.imageTypeError() }}
      </small>
      <small
        class="text-error"
        v-else-if="
          !$v.images.profileImages.profile.imageSize ||
          !$v.images.profileImages.cover.imageSize
        "
      >
        {{ errors.imageSizeError(10) }}
      </small>
    </div>
  </div>
</template>
<script>
// imageType,
import { imageType, imageSize } from "@/validation/customValidators";
import { imageTypeError, imageSizeError } from "@/validation/errors";
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import { Cropper } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";
export default {
  components: {
    Dialog,
    Cropper,
    Button,
  },
  // props: {
  //   images: {
  //     default: () => {
  //       return {
  //         profileImages: {
  //           cover: null,
  //           profile: null,
  //         },
  //       };
  //     },
  //     type: Object,
  //   },
  // },
  data() {
    return {
      displayDialogCoverImage: false,
      images: {
        profileImages: {
          cover: null,
          profile: null,
        },
      },
      imageURLs: {
        profile: require("@/validation/0-2.jpg"),
        cover: require("@/validation/0-2.jpg"),
      },
      editImages: {
        cover: null,
        profile: null,
      },
      finalCoverImage: null,
      finalProfileImage: null,
      errors: {
        imageTypeError,
        imageSizeError,
      },
    };
  },
  validations: {
    images: {
      profileImages: {
        profile: {
          imageType(value) {
            return imageType(value);
          },
          imageSize(value) {
            return imageSize(value, 10 * 1000 * 1024);
          },
        },
        cover: {
          imageType(value) {
            return imageType(value);
          },
          imageSize(value) {
            return imageSize(value, 10 * 1000 * 1024);
          },
        },
      },
    },
  },
  methods: {
    getProfilePic(event) {
      this.images.profileImages.profile = event.target.files[0];
      this.imageURLs.profile = URL.createObjectURL(
        this.images.profileImages.profile
      );
    },
    getCoverPic(event) {
      this.images.profileImages.cover = event.target.files[0];
      this.imageURLs.cover = URL.createObjectURL(
        this.images.profileImages.cover
      );
    },
    getCoverInputImage(event) {
      this.editImages.cover = URL.createObjectURL(event.target.files[0]);
      this.displayDialogCoverImage = true;
    },
    SaveConverImage() {
      this.$refs.coverCropper.getCanvas().toBlob((blob) => {
        this.images.profileImages.cover = new File(
          [blob],
          `${this.getRandomString(20)}.jpg`
        );
        this.imageURLs.cover = URL.createObjectURL(blob);
      }, "image/jpg");
      this.displayDialogCoverImage = false;
    },
    getRandomString(length) {
      var randomChars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var result = "";
      for (var i = 0; i < length; i++) {
        result += randomChars.charAt(
          Math.floor(Math.random() * randomChars.length)
        );
      }
      return result;
    },
  },
};
</script>
<style lang="scss" scoped>
.profile-images {
  width: 100%;
  position: relative;
  .cover-pic {
    width: 100%;
    height: 250px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 34px;
      object-fit: cover;
      object-position: center;
    }
    .cover-pic-icon {
      position: absolute;
      top: 5%;
      right: 5%;
      label {
        cursor: pointer;
        i {
          font-size: 24px;
        }
      }
    }
  }
  .profile-pic {
    position: absolute;
    top: 250px;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    z-index: 10;
    background-color: rgb(207, 207, 207);
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      object-position: center;
      border: 2px solid white;
      //   box-shadow: $shadow-1;
    }
    .profile-pic-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      label {
        cursor: pointer;
        i {
          font-size: 24px;
        }
      }
    }
  }
  .errors {
    position: absolute;
    z-index: 20;
  }
  .profile-pic.border-error {
    img {
      border: none;
      box-shadow: none;
      width: 0;
      height: 0;
    }
  }
}
</style>
