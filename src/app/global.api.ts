export const GlobalVariable = Object.freeze({
    BASE_API_URL: " http://localhost:1234"
});

export const RequestApi = Object.freeze({

    // Report API calls
    POST_Check_MobileNo_Exist: GlobalVariable.BASE_API_URL + '//',
    POST_User_Signin: GlobalVariable.BASE_API_URL + '/tenants/users/auths',
    POST_Tenant_Register: GlobalVariable.BASE_API_URL + '/tenants',
    PUT_Tenant_Verify_Phone: GlobalVariable.BASE_API_URL + '/tenants' ,
   GET_SCHOOLS:GlobalVariable.BASE_API_URL +'/api/schools'
});


