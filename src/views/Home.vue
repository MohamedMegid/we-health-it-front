<template>
    <Page>
            <div class="row">
                <div class="col-12">
                    <h1 class="text-center text-danger my-4">RedFoxes</h1>
                    <!-- PAGE-HEADER -->
                        <div class="page-header">
                            <h1 class="page-title">Welcome To RedFoxes Dashboard </h1>
                            <div>
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Dashboard </li>
                                </ol>
                            </div>
                        </div>
                        <!-- PAGE-HEADER END -->
                </div>
            </div>
            <!-- Row -->
                        <div class="row ">
                            <div class="col-md-12">
                                <div class="card">
                                    <div class="card-header border-bottom-0">
                                        <div class="card-title">
                                            Basic Content Wizard
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <div id="wizard1">
                                            <h3>Personal Information</h3>
                                            <section>
                                                <div class="control-group form-group">
                                                    <label class="form-label">Name</label>
                                                    <input type="text" class="form-control required" placeholder="Name">
                                                </div>
                                                <div class="control-group form-group">
                                                    <label class="form-label">Email</label>
                                                    <input type="email" class="form-control required"
                                                        placeholder="Email Address" autocomplete="new-password">
                                                </div>
                                                <div class="control-group form-group">
                                                    <label class="form-label">Phone Number</label>
                                                    <input type="number" class="form-control required" placeholder="Number">
                                                </div>
                                                <div class="control-group form-group mb-0">
                                                    <label class="form-label">Address</label>
                                                    <input type="text" class="form-control required" placeholder="Address">
                                                </div>
                                            </section>
                                            <h3>Billing Information</h3>
                                            <section>
                                                <div class="table-responsive mg-t-20">
                                                    <table class="table table-bordered">
                                                        <tbody>
                                                            <tr>
                                                                <td>Cart Subtotal</td>
                                                                <td class="text-end">$792.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td><span>Totals</span></td>
                                                                <td class="text-end text-muted"><span>$792.00</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td><span>Order Total</span></td>
                                                                <td>
                                                                    <h2 class="price text-end mb-0">$792.00</h2>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </section>
                                            <h3>Payment Details</h3>
                                            <section>
                                                <div class="form-group">
                                                    <label class="form-label">CardHolder Name</label>
                                                    <input type="text" class="form-control" id="name1"
                                                        placeholder="First Name">
                                                </div>
                                                <div class="form-group">
                                                    <label class="form-label">Card number</label>
                                                    <div class="input-group">
                                                        <input type="text" class="form-control" placeholder="Search for...">
                                                        <span class="input-group-text btn btn-info shadow-none mb-0">
                                                            <i class="fa fa-cc-visa"></i> &nbsp; <i
                                                                class="fa fa-cc-amex"></i> &nbsp;
                                                            <i class="fa fa-cc-mastercard"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm-8">
                                                        <div class="form-group mb-sm-0">
                                                            <label class="form-label">Expiration</label>
                                                            <div class="input-group">
                                                                <input type="number" class="form-control" placeholder="MM"
                                                                    name="expiremonth">
                                                                <input type="number" class="form-control" placeholder="YY"
                                                                    name="expireyear">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-4 ">
                                                        <div class="form-group mb-0">
                                                            <label class="form-label">CVV <i
                                                                    class="fa fa-question-circle"></i></label>
                                                            <input type="number" class="form-control" required="">
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--/Row -->

                        <!--Row -->
                        <div class="row ">
                            <div class="col-md-12">
                                <div class="card">
                                    <div class="card-header border-bottom-0">
                                        <div class="card-title">
                                            Basic Wizard With Validation
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <div id="wizard2">
                                            <h3>Personal Information</h3>
                                            <section>
                                                <div class="row ">
                                                    <div class="col-md-5 col-lg-4">
                                                        <label class="form-control-label">Firstname: <span
                                                                class="tx-danger">*</span></label> <input
                                                            class="form-control" id="firstname" name="firstname"
                                                            placeholder="Enter firstname" required="" type="text">
                                                    </div>
                                                    <div class="col-md-5 col-lg-4 mg-t-20 mg-md-t-0">
                                                        <label class="form-control-label">Lastname: <span
                                                                class="tx-danger">*</span></label> <input
                                                            class="form-control" id="lastname" name="lastname"
                                                            placeholder="Enter lastname" required="" type="text">
                                                    </div>
                                                </div>
                                            </section>
                                            <h3>Billing Information</h3>
                                            <section>
                                                <p>Wonderful transition effects.</p>
                                                <div class="form-group wd-xs-300">
                                                    <label class="form-control-label">Email: <span
                                                            class="tx-danger">*</span></label> <input class="form-control"
                                                        id="email" name="email" placeholder="Enter email address"
                                                        required="" type="email" autocomplete="new-password">
                                                </div>
                                            </section>
                                            <h3>Payment Details</h3>
                                            <section>
                                                <div class="form-group">
                                                    <label class="form-label">CardHolder Name</label>
                                                    <input type="text" class="form-control" id="name11"
                                                        placeholder="First Name">
                                                </div>
                                                <div class="form-group">
                                                    <label class="form-label">Card number</label>
                                                    <div class="input-group">
                                                        <input type="text" class="form-control" placeholder="Search for...">
                                                        <span class="input-group-text btn btn-info shadow-none mb-0">
                                                            <i class="fa fa-cc-visa"></i> &nbsp; <i
                                                                class="fa fa-cc-amex"></i> &nbsp;
                                                            <i class="fa fa-cc-mastercard"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm-8">
                                                        <div class="form-group mb-sm-0">
                                                            <label class="form-label">Expiration</label>
                                                            <div class="input-group">
                                                                <input type="number" class="form-control" placeholder="MM"
                                                                    name="expiremonth">
                                                                <input type="number" class="form-control" placeholder="YY"
                                                                    name="expireyear">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-4 ">
                                                        <div class="form-group mb-0">
                                                            <label class="form-label">CVV <i
                                                                    class="fa fa-question-circle"></i></label>
                                                            <input type="number" class="form-control" required="">
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--/Row-->
            <!--Row open-->
                        <div class="row">
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-header border-bottom-0">
                                        <h3 class="card-title">Form Wizard</h3>
                                    </div>
                                    <div class="card-body">
                                        <div id="smartwizard-3">
                                            <ul>
                                                <li><a href="#step-10">Login</a></li>
                                                <li><a href="#step-11">New User</a></li>
                                                <li><a href="#step-12">End</a></li>
                                            </ul>
                                            <div>
                                                <div id="step-10" class="">
                                                    <form>
                                                        <div class="form-group">
                                                            <label>Email address</label>
                                                            <input type="email" class="form-control" id="exampleInputEmail6"
                                                                placeholder="Enter email address" autocomplete="new-password">
                                                        </div>
                                                        <div class="form-group">
                                                            <label>Password</label>
                                                            <input type="password" class="form-control"
                                                                id="exampleInputPassword7" placeholder="Password" autocomplete="new-password">
                                                        </div>
                                                        <div class="form-group mb-0 justify-content-end">
                                                            <div class="">
                                                                <label class="custom-control custom-checkbox">
                                                                    <input type="checkbox" class="custom-control-input"
                                                                        name="example-checkbox2" value="option2">
                                                                    <span class="custom-control-label">Check me Out</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div id="step-11" class="">
                                                    <form>
                                                        <div class="form-group">
                                                            <label>User Name</label>
                                                            <input type="text" class="form-control" id="inputtext"
                                                                placeholder="Enter User Name">
                                                        </div>
                                                        <div class="form-group">
                                                            <label>Email address</label>
                                                            <input type="email" class="form-control" id="exampleInputEmail8"
                                                                placeholder="Enter email address" autocomplete="new-password">
                                                        </div>
                                                        <div class="form-group">
                                                            <label>Password</label>
                                                            <input type="password" class="form-control"
                                                                id="exampleInputPassword9" placeholder="Password" autocomplete="new-password">
                                                        </div>
                                                        <div class="form-group mb-0 justify-content-end">
                                                            <div class="">
                                                                <label class="custom-control custom-checkbox">
                                                                    <input type="checkbox" class="custom-control-input"
                                                                        name="example-checkbox2" value="option2">
                                                                    <span class="custom-control-label">Check me Out</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div id="step-12" class="">
                                                    <div class="form-group mb-0 justify-content-end">
                                                        <div class="">
                                                            <label class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input"
                                                                    name="example-checkbox2" value="option2">
                                                                <span class="custom-control-label">I agree terms &
                                                                    Conditions</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--row closed-->

                        <!--Row-->
                        <div class="row ">
                            <div class="col-md-12">
                                <div class="card">
                                    <div class="card-header border-bottom-0">
                                        <div class="card-title">
                                            Vertical Orientation Wizard
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <div id="wizard3">
                                            <h3>Personal Information</h3>
                                            <section>
                                                <div class="control-group form-group">
                                                    <label class="form-label">Name</label>
                                                    <input type="text" class="form-control required" placeholder="Name">
                                                </div>
                                                <div class="control-group form-group">
                                                    <label class="form-label">Email</label>
                                                    <input type="email" class="form-control required"
                                                        placeholder="Email Address" autocomplete="new-password">
                                                </div>
                                                <div class="control-group form-group">
                                                    <label class="form-label">Phone Number</label>
                                                    <input type="number" class="form-control required" placeholder="Number">
                                                </div>
                                                <div class="control-group form-group mb-0">
                                                    <label class="form-label">Address</label>
                                                    <input type="text" class="form-control required" placeholder="Address">
                                                </div>
                                                <div class="control-group form-group  row">
                                                    <div class="col-lg-12 col-sm-12">
                                                        <label class="form-label">Dropify Single Upload</label>
                                                        <input type="file" class="dropify" onchange="readURL(this);"
                                                            data-height="180" />
                                                    </div>
                                                </div>
                                                <div class="control-group form-group  row">
                                                    <div class="col-lg-12 col-sm-12">
                                                        <label class="form-label">Multiple Fancy Upload</label>
                                                        <input id="demo" type="file" name="files"
                                                            accept=".jpg, .png, image/jpeg, image/png" multiple>
                                                    </div>
                                                </div>
                                            </section>
                                            <h3>Billing Information</h3>
                                            <section>
                                                <div class="table-responsive mg-t-20">
                                                    <table class="table table-bordered">
                                                        <tbody>
                                                            <tr>
                                                                <td>Cart Subtotal</td>
                                                                <td class="text-end">$792.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td><span>Totals</span></td>
                                                                <td class="text-end text-muted"><span>$792.00</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td><span>Order Total</span></td>
                                                                <td>
                                                                    <h2 class="price text-end mb-0">$792.00</h2>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </section>
                                            <h3>Payment Details</h3>
                                            <section>
                                                <div class="form-group">
                                                    <label class="form-label">CardHolder Name</label>
                                                    <input type="text" class="form-control" id="name12"
                                                        placeholder="First Name">
                                                </div>
                                                <div class="form-group">
                                                    <label class="form-label">Card number</label>
                                                    <div class="input-group">
                                                        <input type="text" class="form-control" placeholder="Search for...">
                                                        <span class="input-group-text btn btn-info shadow-none mb-0">
                                                            <i class="fa fa-cc-visa"></i> &nbsp; <i
                                                                class="fa fa-cc-amex"></i> &nbsp;
                                                            <i class="fa fa-cc-mastercard"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm-8">
                                                        <div class="form-group mb-sm-0">
                                                            <label class="form-label">Expiration</label>
                                                            <div class="input-group">
                                                                <input type="number" class="form-control" placeholder="MM"
                                                                    name="expiremonth">
                                                                <input type="number" class="form-control" placeholder="YY"
                                                                    name="expireyear">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-4 ">
                                                        <div class="form-group mb-0">
                                                            <label class="form-label">CVV <i
                                                                    class="fa fa-question-circle"></i></label>
                                                            <input type="number" class="form-control" required="">
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /Row -->
            <!-- ROW-1 -->
            <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xl-12">
                <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xl-3">
                    <div class="card overflow-hidden">
                    <div class="card-body">
                        <div class="d-flex">
                        <div class="mt-2">
                            <h6 class="">Total Users</h6>
                            <h2 class="mb-0 number-font">44,278</h2>
                        </div>
                        <div class="ms-auto">
                            <div class="chart-wrapper mt-1">
                            <canvas
                                id="saleschart"
                                class="h-8 w-9 chart-dropshadow"
                            ></canvas>
                            </div>
                        </div>
                        </div>
                        <span class="text-muted fs-12"
                        ><span class="text-secondary"
                            ><i class="fe fe-arrow-up-circle text-secondary"></i>
                            5%</span
                        >
                        Last week</span
                        >
                    </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xl-3">
                    <div class="card overflow-hidden">
                    <div class="card-body">
                        <div class="d-flex">
                        <div class="mt-2">
                            <h6 class="">Total Profit</h6>
                            <h2 class="mb-0 number-font">67,987</h2>
                        </div>
                        <div class="ms-auto">
                            <div class="chart-wrapper mt-1">
                            <canvas
                                id="leadschart"
                                class="h-8 w-9 chart-dropshadow"
                            ></canvas>
                            </div>
                        </div>
                        </div>
                        <span class="text-muted fs-12"
                        ><span class="text-pink"
                            ><i class="fe fe-arrow-down-circle text-pink"></i>
                            0.75%</span
                        >
                        Last 6 days</span
                        >
                    </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xl-3">
                    <div class="card overflow-hidden">
                    <div class="card-body">
                        <div class="d-flex">
                        <div class="mt-2">
                            <h6 class="">Total Expenses</h6>
                            <h2 class="mb-0 number-font">$76,965</h2>
                        </div>
                        <div class="ms-auto">
                            <div class="chart-wrapper mt-1">
                            <canvas
                                id="profitchart"
                                class="h-8 w-9 chart-dropshadow"
                            ></canvas>
                            </div>
                        </div>
                        </div>
                        <span class="text-muted fs-12"
                        ><span class="text-green"
                            ><i class="fe fe-arrow-up-circle text-green"></i>
                            0.9%</span
                        >
                        Last 9 days</span
                        >
                    </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xl-3">
                    <div class="card overflow-hidden">
                    <div class="card-body">
                        <div class="d-flex">
                        <div class="mt-2">
                            <h6 class="">Total Cost</h6>
                            <h2 class="mb-0 number-font">$59,765</h2>
                        </div>
                        <div class="ms-auto">
                            <div class="chart-wrapper mt-1">
                            <canvas
                                id="costchart"
                                class="h-8 w-9 chart-dropshadow"
                            ></canvas>
                            </div>
                        </div>
                        </div>
                        <span class="text-muted fs-12"
                        ><span class="text-warning"
                            ><i class="fe fe-arrow-up-circle text-warning"></i>
                            0.6%</span
                        >
                        Last year</span
                        >
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <!-- ROW-1 END -->
    </Page>
</template>

<script>

import Page from '@/components/global/layout/Page.vue';
export default {
name:'Home',
components:{
    Page,
},
    mounted() {
        let externalScript = document.createElement('script')
        externalScript.setAttribute('src', "template/assets/plugins/formwizard/jquery.smartWizard.js")
        document.head.appendChild(externalScript)

        let x = document.createElement('script')
        x.setAttribute('src', "template/assets/plugins/formwizard/fromwizard.js")
        document.head.appendChild(x)

        let y = document.createElement('script')
        y.setAttribute('src', "template/assets/plugins/jquery-steps/jquery.steps.min.js")
        document.head.appendChild(y)

        let xx = document.createElement('script')
        xx.setAttribute('src', "template/assets/plugins/parsleyjs/parsley.min.js")
        document.head.appendChild(xx)

        let xy = document.createElement('script')
        xy.setAttribute('src', "template/assets/plugins/accordion-Wizard-Form/jquery.accordion-wizard.min.js")
        document.head.appendChild(xy)

        let xyz = document.createElement('script')
        xyz.setAttribute('src', "template/assets/js/form-wizard.js")
        document.head.appendChild(xyz)
    }
}
</script>

<style>

</style>