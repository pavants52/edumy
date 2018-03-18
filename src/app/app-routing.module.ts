import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/rou

import { AppComponent } from './app.component';
import { LoginComponent } from './accountApp/loginPage/login.component';
import { UserMasterComponent } from './adminApp/userMaster/usermaster.component';
import { NavigationComponent } from './utilityApp/navigation/navigation.component';
import { TopnavbarComponent } from './utilityApp/topnavbar/topnavbar.component';


//Dashboard & internal pages

import { DashboardComponent } from './dashboardApp/dashboard/dashboard.component'
import { AttendanceComponent } from './dashboardApp/attendance/attendance.component';
import { AddEmployeeComponent } from './dashboardApp/employees/add/addemployee.component';
import { DeleteEmployeeComponent } from './dashboardApp/employees/delete/deleteemployee.component';
import { FinanceAssetManagementComponent } from './dashboardApp/finance/assetManagement/financeassetmanagement.component';
import { FinanceDonationComponent } from './dashboardApp/finance/donations/financedonation.component';
import { FinanceFeeComponent } from './dashboardApp/finance/fees/financefee.component';
import { FinancePayslipComponent } from './dashboardApp/finance/payslip/financepayslip.component';
import { FinanceReportComponent } from './dashboardApp/finance/report/financereport.component';
import { FinanceCategoryComponent } from './dashboardApp/finance/category/financecategory.component';
import { FinanceTransactionComponent } from './dashboardApp/finance/transaction/financetransaction.component';
import { HostelFeeCollectionComponent } from './dashboardApp/hostel/feeCollection/hostelfeecollection.component';
import { UserComponent } from './dashboardApp/hostel/feeCollection/user/user.component';
import { ManageComponent } from './dashboardApp/hostel/feeCollection/manage/manage.component';
import { ViewComponent } from './dashboardApp/hostel/feeCollection/batchfee/list/view.component';
import { HostelFeeDefaulterComponent } from './dashboardApp/hostel/feeDefaulter/hostelfeedefaulter.component';
import { HostelFeePayComponent } from './dashboardApp/hostel/feePay/hostelfeepay.component';
import { HostelReportComponent } from './dashboardApp/hostel/report/hostelreport.component';
import { HostelRoomAdditionalDetailComponent } from './dashboardApp/hostel/roomAdditionalDetail/hostelroomadditionaldetail.component';
import { HostelRoomCmFormComponent } from './dashboardApp/hostel/roomAllocation/hostelroom-cm-form.component';
import { AddSchoolComponent}  from './dashboardApp/school/add/addschool.component';
import { EditSchoolComponent}  from './dashboardApp/school/edit/editschool.component';
import { EditEmployeeComponent}  from './dashboardApp/employees/edit/editemployee.component';
import { ViewEmployeeComponent } from './dashboardApp/employees/view/viewemployee.component';
import { SchoolListComponent } from './dashboardApp/school/list/schoollist.component';
import { EmployeeListComponent } from './dashboardApp/employees/list/employeelist.component';
import { ViewSchoolComponent } from './dashboardApp/school/view/viewschool.component';
import { DeleteSchoolComponent } from './dashboardApp/school/delete/deleteschool.component';
import { SettingsComponent } from './dashboardApp/settings/settings.component';
import { GeneralCmFormComponent} from './dashboardApp/settings/generals/general-cm-form.component';
import { AcadamicSettingsComponent } from './dashboardApp/settings/acadamic/acadamicsettings.component';
import { EmployeeSettingsComponent } from './dashboardApp/settings/employee/employeesettings.component';
import { PaymentSettingsComponent } from './dashboardApp/settings/payment/paymentsettings.component';
import { StudentSettingsComponent } from './dashboardApp/settings/student/studentsettings.component';
import { AddStudentComponent } from './dashboardApp/students/add/addstudent.component';
import { ViewStudentComponent } from './dashboardApp/students/view/viewstudent.component';
import { DeleteStudentComponent } from './dashboardApp/students/delete/deletestudent.component';
import { EditStudentComponent } from './dashboardApp/students/edit/editstudent.component';
import { StudentListComponent } from './dashboardApp/students/list/studentlist.component';
import { TimetableComponent } from './dashboardApp/timeTable/timetable.component';
import { TransportManageRouteComponent } from './dashboardApp/transport/manageRoute/transportmanageroute.component';
import { TransportManageVehicleComponent } from './dashboardApp/transport/manageVehicle/transportmanagevehicle.component';
import { TransportReportComponent } from './dashboardApp/transport/report/transportreport.component';
import { PageNotFoundComponent } from './pageNotFound/page-not-found.component';
import { BatchesComponent } from './dashboardApp/settings/acadamic/batches/batches.component';
import { BatchFeeEditComponent } from './dashboardApp/hostel/feeCollection/batchfee/edit/batchfeeedit.component';
import { AddBatchPayComponent } from './dashboardApp/hostel/feePay/batchpay/add/addbatchpay.component';
import { UserPayComponent } from './dashboardApp/hostel/feePay/userpay/userpay.component';
import { AddClassComponent } from './dashboardApp/settings/acadamic/classes/add/addclass.component';
import { AddSubjectComponent } from './dashboardApp/settings/acadamic/subjects/add/addsubject.component';
import { EditSubjectComponent } from './dashboardApp/settings/acadamic/subjects/edit/editsubject.component';
import { EditClassComponent } from './dashboardApp/settings/acadamic/classes/edit/editclass.component';
import { DeleteClassComponent } from './dashboardApp/settings/acadamic/classes/delete/deleteclass.component';
import { DeleteSubjectComponent } from './dashboardApp/settings/acadamic/subjects/delete/deletesubject.component';
import { ClassesComponent } from './dashboardApp/settings/acadamic/classes/classes.component';
import { SubjectsComponent } from './dashboardApp/settings/acadamic/subjects/subjects.component';
import { SetRouteListComponent } from './dashboardApp/transport/setRoutes/list/setroutelist.component';
import { AddSetRouteComponent } from './dashboardApp/transport/setRoutes/add/addsetroute.component';
import { EditSetRouteComponent } from './dashboardApp/transport/setRoutes/edit/editsetroute.component';
import { DeleteSetRouteComponent } from './dashboardApp/transport/setRoutes/delete/deletesetroute.component';
import { VehicleListComponent } from './dashboardApp/transport/vehicles/list/vehiclelist.component';
import { AddVehicleComponent } from './dashboardApp/transport/vehicles/add/addvehicle.component';
import { EditVehicleComponent } from './dashboardApp/transport/vehicles/edit/editvehicle.component';
import { DeleteVehicleComponent } from './dashboardApp/transport/vehicles/delete/deletevehicle.component';
import { ViewVehicleComponent } from './dashboardApp/transport/vehicles/view/viewvehicle.component';
import { ViewSetRouteComponent } from './dashboardApp/transport/setRoutes/view/viewsetroute.component';
import { FeeListComponent } from './dashboardApp/transport/fee/list/feelist.component';
import { AddFeeComponent } from './dashboardApp/transport/fee/add/addfee.component';
import { EditFeeComponent } from './dashboardApp/transport/fee/edit/editfee.component';
import { DeleteFeeComponent } from './dashboardApp/transport/fee/delete/deletefee.component';
import { ViewFeeComponent } from './dashboardApp/transport/fee/view/viewfee.component';
import { HostelListComponent } from './dashboardApp/hostel/hostels/list/hostellist.component';
import { AddHostelComponent } from './dashboardApp/hostel/hostels/add/addhostel.component';
import { EditHostelComponent } from './dashboardApp/hostel/hostels/edit/edithostel.component';
import { DeleteHostelComponent } from './dashboardApp/hostel/hostels/delete/deletehostel.component';
import { ViewHostelComponent } from './dashboardApp/hostel/hostels/view/viewhostel.component';
import { AllocationListComponent } from './dashboardApp/hostel/roomAllocation/list/allocationlist.component';
import { AddBatchFeeComponent } from './dashboardApp/hostel/feeCollection/batchfee/add/addbatchfee.component';
import { DeleteBatchFeeComponent } from './dashboardApp/hostel/feeCollection/batchfee/delete/deletebatchfee.component';
import { PayListComponent} from './dashboardApp/hostel/feePay/userpay/list/paylist.component';
import { HostelAdditionalDetailComponent } from "./dashboardApp/hostel/additionalDetail/hosteladditionaldetail.component";
import { CreateCategoryComponent } from './dashboardApp/finance/fees/createCategory/createcategory.component';
import { CreateParticularComponent } from './dashboardApp/finance/fees/createParticulars/createparticular.component';
import { CreateDiscountComponent } from './dashboardApp/finance/fees/createDiscount/creatediscount.component';
import { GenerateFineComponent } from "./dashboardApp/finance/fees/generateFine/generatefine.component";
import { NewDonationComponent } from './dashboardApp/finance/donations/new/newdonation.component';
import { AdditionalFieldComponent } from './dashboardApp/finance/donations/additionalfield/additionalfield.component';
import { AddExpenseComponent } from './dashboardApp/finance/transaction/addexpense/addexpense.component';
import { AddIncomeComponent } from './dashboardApp/finance/transaction/addincome/addincome.component';
import { RevertedComponent } from './dashboardApp/finance/transaction/list/reverted.component';
import { AddAssetComponent } from './dashboardApp/finance/assetManagement/assets/addasset.component';
import { AddLiabilityComponent } from './dashboardApp/finance/assetManagement/liability/addliability.component';
import { AddBuildingComponent } from './dashboardApp/timeTable/classRoomAllocation/addbuilding.component';
import { TimingListComponent } from './dashboardApp/timeTable/classTimingSets/list/timinglist.component';
import { AddTimingComponent } from './dashboardApp/timeTable/classTimingSets/add/addtiming.component';
import { EditTimingComponent } from './dashboardApp/timeTable/classTimingSets/edit/edittiming.component';
import { DeleteTimingComponent } from './dashboardApp/timeTable/classTimingSets/delete/deletetiming.component';
import { ViewTimingComponent } from './dashboardApp/timeTable/classTimingSets/view/viewtiming.component';
import { CreateTimetableComponent } from './dashboardApp/timeTable/createTimeTable/createtimetable.component';
import { WeekdayTimingsComponent } from './dashboardApp/timeTable/weekdaysClassTimings/weekdaytimings.component';
import { BookListComponent } from './dashboardApp/library/books/list/booklist.component';
import { AddBookComponent } from './dashboardApp/library/books/add/addbook.component';
import { EditBookComponent } from './dashboardApp/library/books/edit/editbook.component';
import { DeleteBookComponent } from './dashboardApp/library/books/delete/deletebook.component';
import { ViewBookComponent } from './dashboardApp/library/books/view/viewbook.component';
import { BookSearchComponent } from './dashboardApp/library/booksearch.component';
import { LibrarySettingListComponent } from './dashboardApp/library/librarysetting/list/librarysettinglist.component';
import { AddLibrarySettingComponent } from './dashboardApp/library/librarysetting/add/addlibrarysetting.component';
import { ViewLibrarySettingComponent } from './dashboardApp/library/librarysetting/view/viewlibrarysetting.component';
import { EditLibrarySettingComponent } from './dashboardApp/library/librarysetting/edit/editlibrarysetting.component';
import { DeleteLibrarySettingComponent } from './dashboardApp/library/librarysetting/delete/deletelibrarysetting.component';
import { BookAdditionalComponent } from './dashboardApp/library/bookAdditionalDetails/bookadditional.component';
import { SetGradingListComponent } from './dashboardApp/examination/setGradingLevel/list/setgradinglist.component';
import { AddSetGradingComponent } from './dashboardApp/examination/setGradingLevel/add/addsetgrading.component';
import { ViewSetGradingComponent } from './dashboardApp/examination/setGradingLevel/view/viewsetgrading.component';
import { EditSetGradingComponent } from './dashboardApp/examination/setGradingLevel/edit/editsetgrading.component';
import { DeleteSetGradingComponent } from './dashboardApp/examination/setGradingLevel/delete/deletesetgrading.component';
import { ClassDesignationComponent } from './dashboardApp/examination/classDesignations/classdesignation.component';
import { IcseSettingsComponent } from './dashboardApp/examination/icseSettings/icsesettings.component';
import { IcseExamComponent } from './dashboardApp/examination/icseSettings/icseExam/icseexam.component';
import { AssessmentGroupComponent } from './dashboardApp/examination/icseSettings/internalAssessmentGroup/assessmentGroup.component';
import { AssessmentSettingsComponent } from './dashboardApp/examination/icseSettings/internalAssessmentSettings/assessmentsettings.component';
import { WeightageGroupComponent } from './dashboardApp/examination/icseSettings/icseWeightages/weightagegroup.component';
import { RankingLevelComponent } from './dashboardApp/examination/rankingLevels/rankinglevel.component';
import { CceSettingsComponent } from './dashboardApp/examination/cceSettings/ccesettings.component';
import { CceGradeComponent } from './dashboardApp/examination/cceSettings/basicSettings/ccegrade/ccegrade.component';
import { CceWeightageComponent } from './dashboardApp/examination/cceSettings/basicSettings/cceweightage/cceweightage.component';
import { CceExamComponent } from './dashboardApp/examination/cceSettings/basicSettings/cceexam/cceexam.component';
import { FormativeAssessmentComponent } from './dashboardApp/examination/cceSettings/scholasticSettings/formativeassessment.component';
import { CoScholasticSettingsComponent } from './dashboardApp/examination/cceSettings/scholasticSettings/coscholasticSettings/coscholasticsettings.component';
import { ExamManagementComponent } from './dashboardApp/examination/examManagement/exammanagement.component';
import { NewExamComponent } from './dashboardApp/examination/examManagement/newExam/newexam.component';
import { ClassExamComponent } from './dashboardApp/examination/examManagement/classWiseExam/classexam.component';
import { OnlineExamComponent } from './dashboardApp/examination/onlineExam/onlineexam.component';
import { EventCreationComponent } from './dashboardApp/eventCreation/eventcreation.component';
import { DataManagementComponent } from './dashboardApp/dataManagement/datamanagement.component';
import { StoreComponent } from './dashboardApp/inventory/store/store.component';
import { StoreCategoryComponent } from './dashboardApp/inventory/store/storeCategory/storecategory.component';
import { StoreTypeComponent } from './dashboardApp/inventory/store/storeType/storetype.component';
import { StoreDetailsComponent } from './dashboardApp/inventory/store/storeDetails/storedetails.component';
import { ItemComponent } from './dashboardApp/inventory/items/item.component';
import { ItemCategoryComponent } from './dashboardApp/inventory/items/itemCategory/itemcategory.component';
import { ItemTypeComponent } from './dashboardApp/inventory/items/itemType/itemtype.component';
import { StoreItemComponent } from './dashboardApp/inventory/items/storeItem/storeitem.component';
import { SupplierComponent } from './dashboardApp/inventory/supplier/supplier.component';
import { PurchaseOrderComponent } from './dashboardApp/inventory/purchase/purchaseorder.component';
import { NewPurchaseComponent } from './dashboardApp/inventory/purchase/new/newpurchase.component';
import { NewGrnComponent } from './dashboardApp/inventory/purchase/grn/newgrn.component';
import { DisciplineComponent } from './dashboardApp/discipline/discipline.component';
import { ApplicantRegistrationComponent } from './dashboardApp/applicantRegistration/applicantregistration.component';
import { ManageClassComponent } from './dashboardApp/applicantRegistration/manageClass/manageclass.component';
import { ManagePinComponent } from './dashboardApp/applicantRegistration/managePin/managepin.component';
import { PlacementComponent } from './dashboardApp/placement/placement.component';
import { TaskManagementComponent } from './dashboardApp/tasks/taskmanagement.component';







const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: LoginComponent },
  { path: 'userMaster', component: UserMasterComponent },
  { path: 'navigation', component: NavigationComponent },
  { path: 'topnavbar', component: TopnavbarComponent },
  { path: 'attendance', component: AttendanceComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'addemployee', component: AddEmployeeComponent },
  { path: 'assetmanagement', component: FinanceAssetManagementComponent ,
    children: [
      {
        path:'',
        component:AddAssetComponent
      },
      {
        path:'addasset',
        component:AddAssetComponent
      },
      {
        path:'addliability',
        component:AddLiabilityComponent
      },
  ],
  },
  { path: 'financategory', component: FinanceCategoryComponent },
  { path: 'finandonation', component: FinanceDonationComponent,
    children: [
      {
        path:'',
        component:NewDonationComponent
      },
      {
        path:'newdonation',
        component:NewDonationComponent
      },
      {
        path:'additionalfield',
        component:AdditionalFieldComponent
      },
      ],
  },
  { path: 'financefee', component: FinanceFeeComponent,
    children: [
      {
        path:'',
        component:CreateCategoryComponent
      },
      {
        path:'createcategory',
        component:CreateCategoryComponent
      },
      {
        path:'createparticular',
        component:CreateParticularComponent
      },
      {
        path:'creatediscount',
        component:CreateDiscountComponent
      },
      {
        path:'generatefine',
        component:GenerateFineComponent
      },
      ],

  },
  { path: 'financepayslip', component: FinancePayslipComponent },
  { path: 'financereport', component: FinanceReportComponent },
  { path: 'financetransaction', component: FinanceTransactionComponent ,
    children: [
      {
        path:'',
        component:AddExpenseComponent
      },
      {
        path:'addexpense',
        component:AddExpenseComponent
      },
      {
        path:'addincome',
        component:AddIncomeComponent
      },
      {
        path:'reverted',
        component:RevertedComponent
      },
      ],
  },
  { path: 'hosteladditionaldetail', component: HostelAdditionalDetailComponent },
  {
    path: 'hostelfeecollection', component: HostelFeeCollectionComponent,
    children: [
      {
        path:'',
        component:AddBatchFeeComponent
      },
      {
        path:'addbatchfee',
        component:AddBatchFeeComponent
      },
      {
        path:'user',
        component:UserComponent
      },
      {
        path:'view',
        component:ViewComponent
      },
      {
        path:'batchfeeedit/:id',
        component:BatchFeeEditComponent
      },
      {
        path:'deletebatchfee/:id',
        component:DeleteBatchFeeComponent
      },
      {
        path:'manage',
        component:ManageComponent
      },

    ],
  },

  { path: 'hostelfeedefauleter', component: HostelFeeDefaulterComponent },
  { path: 'hostelfeepay', component: HostelFeePayComponent,
    children: [
      {
        path:'',
        component:AddBatchPayComponent
      },
      {
        path:'addbatchpay',
        component:AddBatchPayComponent
      },
      {
        path:'userpay',
        component:UserPayComponent
      },
      {
        path:'paylist',
        component:PayListComponent
      },
      ],
  },
  { path: 'hostelreport', component: HostelReportComponent },
  { path: 'hostelroomadditionaldetail', component: HostelRoomAdditionalDetailComponent },
  { path: 'addschool', component: AddSchoolComponent },
  { path: 'schoollist', component: SchoolListComponent },
  { path: 'employeelist', component: EmployeeListComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'hostelroomcmform', component: HostelRoomCmFormComponent },
  { path: 'allocationlist', component: AllocationListComponent },
  { path: 'generalcmform', component: GeneralCmFormComponent },
  { path: 'acadamicsettings', component: AcadamicSettingsComponent,
    children:[
      {
        path:'',
        component:BatchesComponent
      },
      {
        path:'batches',
        component:BatchesComponent
      },
      {
        path: 'classes',
        component:ClassesComponent
      },
      {
        path: 'addclass',
        component:AddClassComponent
      },
      {
        path: 'editclass/:id',
        component:EditClassComponent
      },
      {
        path: 'deleteclass/:id',
        component:DeleteClassComponent
      },
      {
        path: 'subjects',
        component:SubjectsComponent
      },
      {
        path: 'addsubject',
        component:AddSubjectComponent
      },
      {
        path: 'editsubject/:id',
        component:EditSubjectComponent
      },
      {
        path: 'deletesubject/:id',
        component:DeleteSubjectComponent
      },
    ],
  },
  { path: 'employeesettings', component: EmployeeSettingsComponent },
  { path: 'paymentsettings', component: PaymentSettingsComponent },
  { path: 'studentsettings', component: StudentSettingsComponent },
  { path: 'addStudent', component: AddStudentComponent },
  { path: 'studentlist', component: StudentListComponent },
  { path: 'icsesettings', component: IcseSettingsComponent,
    children:[
      {
        path:'',
        component:IcseExamComponent
      },
      {
        path:'icseexam',
        component:IcseExamComponent
      },
      {
        path:'assessmentgroup',
        component:AssessmentGroupComponent
      },
      {
        path:'weightagegroup',
        component:WeightageGroupComponent
      },
      {
        path:'assessmentsettings',
        component:AssessmentSettingsComponent
      },
      ],

  },
  { path: 'ccesettings', component: CceSettingsComponent,
    children:[
      {
        path:'',
        component:CceGradeComponent
      },
      {
        path:'ccegrade',
        component:CceGradeComponent
      },
      {
        path:'cceweightage',
        component:CceWeightageComponent
      },
      {
        path:'cceexam',
        component:CceExamComponent
      },
      { path:'formativeassessment',
        component:FormativeAssessmentComponent
      },
      { path:'coscholasticsettings',
        component:CoScholasticSettingsComponent
      },
      ],

  },

  { path:'rankinglevel',component:RankingLevelComponent },
  { path:'exammanagement',component:ExamManagementComponent,
    children:[
      {
        path:'',
        component:NewExamComponent
      },
      {
        path:'newexam',
        component:NewExamComponent
      },
      {
        path:'classexam',
        component:ClassExamComponent
      },
      ],
  },
  { path: 'onlineexam', component: OnlineExamComponent },
  { path: 'eventcreation', component: EventCreationComponent },
  { path: 'store', component: StoreComponent,
    children:[
      {
        path:'',
        component:StoreCategoryComponent
      },
      {
        path:'storecategory',
        component:StoreCategoryComponent
      },
      {
        path:'storetype',
        component:StoreTypeComponent
      },
      {
        path:'storedetails',
        component:StoreDetailsComponent
      },
      ],
  },
  { path: 'item', component: ItemComponent,
  children:[
    {
      path:'',
      component:ItemCategoryComponent
    },
    {
      path:'itemcategory',
      component:ItemCategoryComponent
    },
    {
      path:'itemtype',
      component:ItemTypeComponent
    },
    {
      path:'storeitem',
      component:StoreItemComponent
    },

  ],
  },
  { path:'supplier',component:SupplierComponent },
  { path:'purchaseorder',component:PurchaseOrderComponent,
    children:[
      {
        path:'',
        component:NewPurchaseComponent
      },
      {
        path:'newpurchase',
        component:NewPurchaseComponent
      },
      {
        path:'newgrn',
        component:NewGrnComponent
      },
      ],
  },
  { path: 'applicantregistration', component: ApplicantRegistrationComponent,
    children:[
      {
        path:'',
        component:ManageClassComponent
      },
      {
        path:'manageclass',
        component:ManageClassComponent
      },
      {
        path:'managepin',
        component:ManagePinComponent
      },
      ],
  },
  { path: 'taskmanagement', component: TaskManagementComponent },
  { path: 'placement', component: PlacementComponent },
  { path: 'discipline', component: DisciplineComponent },
  { path: 'datamanagement', component: DataManagementComponent },
  { path: 'classdesignation', component: ClassDesignationComponent },
  { path: 'timetable', component: TimetableComponent },
  { path: 'createtimetable', component: CreateTimetableComponent },
  { path: 'weekdaytimings', component: WeekdayTimingsComponent },
  { path: 'addbuilding', component: AddBuildingComponent },
  { path: 'setgradinglist', component: SetGradingListComponent },
  { path: 'addsetgrading', component: AddSetGradingComponent },
  { path: 'deletesetgrading/:id', component: DeleteSetGradingComponent },
  { path: 'editsetgrading/:id', component: EditSetGradingComponent },
  { path: 'viewsetgrading/:id', component: ViewSetGradingComponent },
  { path: 'timinglist', component: TimingListComponent },
  { path: 'booksearch', component: BookSearchComponent },
  { path: 'bookadditional', component: BookAdditionalComponent },
  { path: 'librarysettinglist', component: LibrarySettingListComponent },
  { path: 'addlibrarysetting', component: AddLibrarySettingComponent },
  { path: 'editlibrarysetting/:id', component: EditLibrarySettingComponent },
  { path: 'deletelibrarysetting/:id', component: DeleteLibrarySettingComponent },
  { path: 'viewlibrarysetting/:id', component: ViewLibrarySettingComponent },
  { path: 'addtiming', component: AddTimingComponent },
  { path: 'edittiming/:id', component: EditTimingComponent },
  { path: 'deletetiming/:id', component: DeleteTimingComponent },
  { path: 'viewtiming/:id', component: ViewTimingComponent },
  { path: 'booklist', component: BookListComponent },
  { path: 'addbook', component: AddBookComponent },
  { path: 'editbook/:id', component: EditBookComponent },
  { path: 'deletebook/:id', component: DeleteBookComponent },
  { path: 'viewbook/:id', component: ViewBookComponent },
  { path: 'transportmanageroute', component: TransportManageRouteComponent },
  { path: 'transportmanagevehicle', component: TransportManageVehicleComponent },
  { path: 'transportreport', component: TransportReportComponent },
  { path: 'hostellist', component: HostelListComponent },
  { path: 'addhostel', component: AddHostelComponent },
  { path: 'edithostel', component: EditHostelComponent },
  { path: 'deletehostel', component: DeleteHostelComponent },
  { path: 'viewhostel', component: ViewHostelComponent },
  { path: 'feelist', component: FeeListComponent },
  { path: 'addfee', component: AddFeeComponent },
  { path: 'editfee', component: EditFeeComponent },
  { path: 'viewfee', component: ViewFeeComponent },
  { path: 'deletefee', component: DeleteFeeComponent },
  { path: 'setroutelist', component: SetRouteListComponent },
  { path: 'editsetroute', component: EditSetRouteComponent },
  { path: 'vehiclelist', component: VehicleListComponent },
  { path: 'addvehicle', component: AddVehicleComponent },
  { path: 'editvehicle', component: EditVehicleComponent },
  { path: 'viewvehicle', component: ViewVehicleComponent },
  { path: 'deletevehicle', component: DeleteVehicleComponent },
  { path: 'addsetroute', component: AddSetRouteComponent },
  { path: 'viewsetroute', component: ViewSetRouteComponent },
  { path: 'deletesetroute', component: DeleteSetRouteComponent },
  { path: 'viewemployee/:id', component: ViewEmployeeComponent },
  { path: 'editschool/:id', component: EditSchoolComponent },
  { path: 'viewschool/:id', component: ViewSchoolComponent },
  { path: 'editemployee/:id', component: EditEmployeeComponent },
  { path: 'deleteemployee/:id', component: DeleteEmployeeComponent },
  { path: 'deleteschool/:id', component: DeleteSchoolComponent },
  { path: 'deletestudent/:id', component: DeleteStudentComponent },
  { path: 'viewstudent/:id', component: ViewStudentComponent },
  { path: 'viewemployee/:id', component: ViewEmployeeComponent },
  { path: 'editstudent/:id', component: EditStudentComponent },
  { path: '**', component: PageNotFoundComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
