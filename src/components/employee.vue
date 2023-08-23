<template>
    <div class="container">
        <div class="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 500px;">
            <h2 id="producttittle" style="font-size: 45.8px; font-weight: bold;">Employee Details</h2>
        </div>

        <div class="row">
        <div class="col">
            <div class="card">
                <div class="card-body">
                    <table class="table table-striped table-mobile-responsive table-mobile-sided">
                        <thead>
                            <tr>
                                <th scope="col">Employee Id</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in list" :key="item.id">
                                <td scope="row" data-content="Employee Id">{{ item.id }} </td>
                                <td data-content="First Name">{{ item.first_name }}</td>
                                <td data-content="Last Name">{{ item.last_name }}</td>
                                <td data-content="Email">{{ item.email }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
              </div>
        </div>
    </div>

    </div>
</template>
      
<script>

import axios from "axios"

export default {
     name: 'EmployeeDetails',

     data(){

        return{
            list:[]
        }

     },

     async mounted()
     {
        let result = await axios.get("https://reqres.in/api/users?page=1");
        // console.warn(result.data.data)
        this.list = result.data.data
     }
};
</script>    

<style scoped>

#Detailspadding{
margin-top: 30px;

}

:root {
--tmr-bootstrap-border-color: #dee2e6;
--tmr-white: #eee;
--tmr-table-header: #54667a;
--tmr-row-divider-color: #3490dc;
--tmr-stripped-row-background-color: rgba(0, 0, 0, 0.05);
}



@media only screen and (max-width: 760px),
(min-device-width: 768px) and (max-device-width: 1024px) {

[data-content]:before {
    content: attr(data-content);
}


.table-mobile-responsive,
.table-mobile-responsive thead,
.table-mobile-responsive tbody,
.table-mobile-responsive th,
.table-mobile-responsive td,
.table-mobile-responsive tr {
    display: block;
}

.table-mobile-responsive.text-center {
    text-align: left !important;
}
.table-mobile-responsive caption {
    width: max-content;
}


.table-mobile-responsive thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
}

.table-mobile-responsive> :not(:first-child) {
    border-top: none;
}

.table-mobile-responsive>:not(caption)>*>* {
    border-color: var(--tmr-bootstrap-border-color);
}

.table-mobile-responsive tr:not(.bg-light-blue) {
    border-bottom: 2px solid var(--tmr-row-divider-color);
}


.table-mobile-responsive td {

    border: none;
    border-bottom: 1px solid var(--tmr-white);
    position: relative;
    padding-left: 50%;
    padding-top: 1.5rem !important;
}

.table-mobile-responsive td:before {

    position: absolute;

    top: 0;
    left: 6px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
    font-weight: bold;
    color: var(--tmr-table-header);
}


.table-mobile-responsive.table-mobile-sided> :not(:first-child) {
    border-top: none;
}

.table-mobile-responsive.table-mobile-sided>:not(caption)>*>* {
    border-color: var(--bs-table-border-color);
}
.table-mobile-responsive.table-mobile-sided td {

    border: none;
    border-bottom: 1px solid var(--tmr-white);
    position: relative;
    padding-left: 50%;
    padding-top: 0px !important;
    display: flex;
    justify-content: flex-end;
}
.table-mobile-responsive.table-mobile-sided td:before {

    position: absolute;

    top: 0;
    left: 6px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
    font-weight: bold;
    color: var(--tmr-table-header);
}


.table-mobile-responsive.table-mobile-styleless tr:not(.bg-light-blue) {
    border-bottom: none !important;
}


.table-mobile-responsive.table-mobile-striped>tbody>tr:nth-of-type(odd)>* {
    background-color: var(--tmr-stripped-row-background-color) !important;
}
}

.col {
    flex: 1 0 0%;
    padding-bottom: 37px;
}

#producttittle{
    color: #21201e;
    margin-top: 30px;
    margin-bottom: 15px;
	font-size: 48px;
	text-align: center;
}
</style>