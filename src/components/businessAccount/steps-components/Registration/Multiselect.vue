 <template>
    <Multiselect
              v-model="value"
              :options="options"
              :multiple="true"
              :close-on-select="false"
              :clear-on-select="false"
              :preserve-search="true"
              @select="selectAll"
              @remove="remove"
              placeholder="Pick some"
            ></Multiselect>
</template>

<script>
import Multiselect from 'vue-multiselect';

export default {
    components: { Multiselect },
      methods: {
    selectAll(selectedOption) {
      if (selectedOption === "all") {
        console.log(this.value);

        this.options.map((option) => {
          if (option !== "all" && !this.value.includes(option)) {
            this.value.push(option);
          }
        });
      }
    },
    remove(removedOption) {
      console.log(removedOption);
      if (removedOption === "all") {
        this.options.map((option) => {
          this.value.pop(option);
        });
      }
    },
  },
}
</script>

<style >
.multiselect__tags{
  border-radius: 35px !important;
  padding: 3%;
}
</style>