import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormBuilder,FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './utilityApp/navigation/navigation.component';
import { TopnavbarComponent } from './utilityApp/topnavbar/topnavbar.component';
import { HeaderComponent } from './utilityApp/header/header.component';
import { SidebarComponent } from './utilityApp/sidebar/sidebar.component';
import { FooterComponent } from './utilityApp/footer/footer.component';

import { AppComponent } from './app.component';
import { LoginComponent } from './accountApp/loginPage/login.component';

import { UserMasterComponent } from './adminApp/userMaster/usermaster.component';



//Dashboard & internal pages
import { DashboardComponent } from './dashboardApp/dashboard/dashboard.component'
import { AttendanceComponent } from './dashboardApp/attendance/attendance.component';
import { AddEmployeeComponent } from './dashboardApp/employees/add/addemployee.component';
import { EmployeeCmFormComponent } from './dashboardApp/employees/employee-cm-form-component';
import { ViewEmployeeComponent } from './dashboardApp/employees/view/viewemployee.component';
import { DeleteEmployeeComponent } from './dashboardApp/employees/delete/deleteemployee.component';
import { FinanceAssetManagementComponent } from './dashboardApp/finance/assetManagement/financeassetmanagement.component';
import { FinanceDonationComponent } from './dashboardApp/finance/donations/financedonation.component';
import { FinanceFeeComponent } from './dashboardApp/finance/fees/financefee.component';
import { FinancePayslipComponent } from './dashboardApp/finance/payslip/financepayslip.component';
import { FinanceReportComponent } from './dashboardApp/finance/report/financereport.component';
import { FinanceCategoryComponent } from './dashboardApp/finance/category/financecategory.component';
import { FinanceTransactionComponent } from './dashboardApp/finance/transaction/financetransaction.component';
import { HostelAdditionalDetailComponent } from './dashboardApp/hostel/additionalDetail/hosteladditionaldetail.component';
import { HostelFeeCollectionComponent } from './dashboardApp/hostel/feeCollection/hostelfeecollection.component';
import { BatchFeeComponent } from './dashboardApp/hostel/feeCollection/batchfee/batchfee.component';
import { BatchFeeEditComponent } from './dashboardApp/hostel/feeCollection/batchfee/edit/batchfeeedit.component';
import { AddBatchFeeComponent } from './dashboardApp/hostel/feeCollection/batchfee/add/addbatchfee.component';
import { DeleteBatchFeeComponent } from './dashboardApp/hostel/feeCollection/batchfee/delete/deletebatchfee.component';
import { BatchfeeService } from './dashboardApp/hostel/feeCollection/batchfee/batchfee.service';
import { BatchPayComponent } from './dashboardApp/hostel/feePay/batchpay/batchpay.component';
import { UserPayComponent } from './dashboardApp/hostel/feePay/userpay/userpay.component';
import { UserComponent } from './dashboardApp/hostel/feeCollection/user/user.component';
import { ViewComponent } from './dashboardApp/hostel/feeCollection/batchfee/list/view.component';
import { ManageComponent } from './dashboardApp/hostel/feeCollection/manage/manage.component';
import { HostelFeeDefaulterComponent } from './dashboardApp/hostel/feeDefaulter/hostelfeedefaulter.component';
import { HostelFeePayComponent } from './dashboardApp/hostel/feePay/hostelfeepay.component';
import { HostelReportComponent } from './dashboardApp/hostel/report/hostelreport.component';
import { HostelRoomAdditionalDetailComponent } from './dashboardApp/hostel/roomAdditionalDetail/hostelroomadditionaldetail.component';
import { HostelRoomCmFormComponent } from './dashboardApp/hostel/roomAllocation/hostelroom-cm-form.component';
import { AllocationListComponent } from './dashboardApp/hostel/roomAllocation/list/allocationlist.component';
import { AddSchoolComponent } from './dashboardApp/school/add/addschool.component';
import { ViewSchoolComponent}  from './dashboardApp/school/view/viewschool.component';
import { EditSchoolComponent}  from './dashboardApp/school/edit/editschool.component';
import { EditEmployeeComponent}  from './dashboardApp/employees/edit/editemployee.component';
import { SchoolListComponent } from './dashboardApp/school/list/schoollist.component';
import { EmployeeListComponent } from './dashboardApp/employees/list/employeelist.component';
import { DeleteSchoolComponent } from './dashboardApp/school/delete/deleteschool.component';
import { DeleteStudentComponent } from './dashboardApp/students/delete/deletestudent.component';
import { SchoolCmFormComponent } from './dashboardApp/school/school-cm-form.component';
import { SchoolService } from './dashboardApp/school/school.service';
import { EmployeeService } from './dashboardApp/employees/employee.service';
import { SettingsComponent } from './dashboardApp/settings/settings.component';
import { AcadamicSettingsComponent } from './dashboardApp/settings/acadamic/acadamicsettings.component';
import { BatchService } from './dashboardApp/settings/acadamic/batches/batch.service';
import { ClassService } from './dashboardApp/settings/acadamic/classes/class.service';
import { SubjectService } from './dashboardApp/settings/acadamic/subjects/subject.service';
import { AddClassComponent } from './dashboardApp/settings/acadamic/classes/add/addclass.component';
import { EditClassComponent } from './dashboardApp/settings/acadamic/classes/edit/editclass.component';
import { DeleteClassComponent } from './dashboardApp/settings/acadamic/classes/delete/deleteclass.component';
import { ClassCmFormComponent } from './dashboardApp/settings/acadamic/classes/class-cm-form.component';
import { AddSubjectComponent } from './dashboardApp/settings/acadamic/subjects/add/addsubject.component';
import { EditSubjectComponent } from './dashboardApp/settings/acadamic/subjects/edit/editsubject.component';
import { DeleteSubjectComponent } from './dashboardApp/settings/acadamic/subjects/delete/deletesubject.component';
import { SubjectCmFormComponent } from './dashboardApp/settings/acadamic/subjects/subject-cm-form.component';
import { StudentSettingService } from './dashboardApp/settings/student/studentsetting.service';
import { EmployeeSettingsComponent } from './dashboardApp/settings/employee/employeesettings.component';
import { EmployeeSettingService } from './dashboardApp/settings/employee/employeesetting.service';
import { PaymentSettingsComponent } from './dashboardApp/settings/payment/paymentsettings.component';
import { PaymentService } from './dashboardApp/settings/payment/payment.service';
import { StudentSettingsComponent } from './dashboardApp/settings/student/studentsettings.component';
import { AddStudentComponent } from './dashboardApp/students/add/addstudent.component';
import { ViewStudentComponent } from './dashboardApp/students/view/viewstudent.component';
import { EditStudentComponent } from './dashboardApp/students/edit/editstudent.component';
import { StudentCmFormComponent} from './dashboardApp/students/student-cm-form.component';
import { StudentService } from './dashboardApp/students/student.service';
import { StudentListComponent } from './dashboardApp/students/list/studentlist.component';
import { GeneralCmFormComponent} from './dashboardApp/settings/generals/general-cm-form.component';
import { GeneralService} from './dashboardApp/settings/generals/general.service';
import { TimetableComponent } from './dashboardApp/timeTable/timetable.component';
import { TransportFeeCmFormComponent } from './dashboardApp/transport/fee/transportfee-cm-form.component';
import { FeeService } from './dashboardApp/transport/fee/fee.service';
import { FeeListComponent } from './dashboardApp/transport/fee/list/feelist.component';
import { ViewFeeComponent } from './dashboardApp/transport/fee/view/viewfee.component';
import { AddFeeComponent } from './dashboardApp/transport/fee/add/addfee.component';
import { EditFeeComponent } from './dashboardApp/transport/fee/edit/editfee.component';
import { DeleteFeeComponent } from './dashboardApp/transport/fee/delete/deletefee.component';
import { TransportManageRouteComponent } from './dashboardApp/transport/manageRoute/transportmanageroute.component';
import { TransportManageVehicleComponent } from './dashboardApp/transport/manageVehicle/transportmanagevehicle.component';
import { TransportReportComponent } from './dashboardApp/transport/report/transportreport.component';
import { SetRouteCmFormComponent } from './dashboardApp/transport/setRoutes/setroute-cm-form.component';
import { SetRouteListComponent } from './dashboardApp/transport/setRoutes/list/setroutelist.component';
import { RouteService } from './dashboardApp/transport/setRoutes/route.service';
import { VehicleService } from './dashboardApp/transport/vehicles/vehicle.service';
import { AddSetRouteComponent } from './dashboardApp/transport/setRoutes/add/addsetroute.component';
import { EditSetRouteComponent } from './dashboardApp/transport/setRoutes/edit/editsetroute.component';
import { DeleteSetRouteComponent } from './dashboardApp/transport/setRoutes/delete/deletesetroute.component';
import { VehicleCmFormComponent } from './dashboardApp/transport/vehicles/vehicle-cm-form.component';
import { VehicleListComponent } from './dashboardApp/transport/vehicles/list/vehiclelist.component';
import { AddVehicleComponent } from './dashboardApp/transport/vehicles/add/addvehicle.component';
import { EditVehicleComponent } from './dashboardApp/transport/vehicles/edit/editvehicle.component';
import { DeleteVehicleComponent } from './dashboardApp/transport/vehicles/delete/deletevehicle.component';
import { ViewVehicleComponent } from './dashboardApp/transport/vehicles/view/viewvehicle.component';
import { ViewSetRouteComponent } from './dashboardApp/transport/setRoutes/view/viewsetroute.component';
import { HostelCmFormComponent } from './dashboardApp/hostel/hostels/hostel-cm-form.component';
import { HostelService } from './dashboardApp/hostel/hostels/hostel.service';
import { HostelListComponent } from './dashboardApp/hostel/hostels/list/hostellist.component';
import { AddHostelComponent } from './dashboardApp/hostel/hostels/add/addhostel.component';
import { EditHostelComponent } from './dashboardApp/hostel/hostels/edit/edithostel.component';
import { DeleteHostelComponent } from './dashboardApp/hostel/hostels/delete/deletehostel.component';
import { ViewHostelComponent } from './dashboardApp/hostel/hostels/view/viewhostel.component';
import { CategoryPipe } from './dashboardApp/hostel/roomAllocation/category.pipe';
import { Category } from './dashboardApp/hostel/feePay/userpay/category';
import { PayListComponent } from './dashboardApp/hostel/feePay/userpay/list/paylist.component';
import { AddBatchPayComponent } from './dashboardApp/hostel/feePay/batchpay/add/addbatchpay.component';
import { BatchpayService } from './dashboardApp/hostel/feePay/batchpay/batchpay.service';
import { HosteladdService } from './dashboardApp/hostel/additionalDetail/hosteladd.service';
import { RoomaddService } from './dashboardApp/hostel/roomAdditionalDetail/roomadd.service';
import { FincategoryService } from './dashboardApp/finance/category/fincategory.service';
import { CreateCategoryComponent } from './dashboardApp/finance/fees/createCategory/createcategory.component';
import { CreatecatService} from './dashboardApp/finance/fees/createCategory/createcat.service';
import { CreateParticularComponent } from './dashboardApp/finance/fees/createParticulars/createparticular.component';
import { ParticularService } from './dashboardApp/finance/fees/createParticulars/particular.service';
import { CreateDiscountComponent } from './dashboardApp/finance/fees/createDiscount/creatediscount.component';
import { DiscountService } from './dashboardApp/finance/fees/createDiscount/discount.service';
import { GenerateFineComponent } from './dashboardApp/finance/fees/generateFine/generatefine.component';
import { GenerateService } from './dashboardApp/finance/fees/generateFine/generate.service';
import { NewDonationComponent } from './dashboardApp/finance/donations/new/newdonation.component';
import { DonationService } from './dashboardApp/finance/donations/new/donation.service';
import { AdditionalFieldComponent } from './dashboardApp/finance/donations/additionalfield/additionalfield.component';
import { AdditionalService } from './dashboardApp/finance/donations/additionalfield/additional.service';
import { AddExpenseComponent } from './dashboardApp/finance/transaction/addexpense/addexpense.component';
import { ExpenseService } from './dashboardApp/finance/transaction/addexpense/expense.service';
import { AddIncomeComponent } from './dashboardApp/finance/transaction/addincome/addincome.component';
import { IncomeService } from './dashboardApp/finance/transaction/addincome/income.service';
import { TransactionPipe } from './dashboardApp/finance/transaction/transaction.pipe';
import { RevertedComponent } from './dashboardApp/finance/transaction/list/reverted.component';
import { AddAssetComponent } from './dashboardApp/finance/assetManagement/assets/addasset.component';
import { AssetService } from './dashboardApp/finance/assetManagement/assets/asset.service';
import { AddLiabilityComponent } from './dashboardApp/finance/assetManagement/liability/addliability.component';
import { LiabilityService } from './dashboardApp/finance/assetManagement/liability/liability.service';
import { ManagerouteService } from './dashboardApp/transport/manageRoute/manageroute.service';
import { ManagevehicleService } from "./dashboardApp/transport/manageVehicle/managevehicle.service";
import { AddBuildingComponent } from './dashboardApp/timeTable/classRoomAllocation/addbuilding.component';
import { BuildingService } from './dashboardApp/timeTable/classRoomAllocation/building.service';
import { ClassTimingCmFormComponent } from './dashboardApp/timeTable/classTimingSets/classtiming-cm-form.component';
import { TimingService } from './dashboardApp/timeTable/classTimingSets/timing.service';
import { TimingListComponent } from './dashboardApp/timeTable/classTimingSets/list/timinglist.component';
import { AddTimingComponent } from './dashboardApp/timeTable/classTimingSets/add/addtiming.component';
import { EditTimingComponent } from './dashboardApp/timeTable/classTimingSets/edit/edittiming.component';
import { DeleteTimingComponent } from './dashboardApp/timeTable/classTimingSets/delete/deletetiming.component';
import { ViewTimingComponent } from './dashboardApp/timeTable/classTimingSets/view/viewtiming.component';
import { CreateTimetableComponent } from './dashboardApp/timeTable/createTimeTable/createtimetable.component';
import { TimetableService } from './dashboardApp/timeTable/createTimeTable/timetable.service';
import { WeekdayTimingsComponent } from './dashboardApp/timeTable/weekdaysClassTimings/weekdaytimings.component';
import { BookCmFormComponent } from './dashboardApp/library/books/book-cm-form-component';
import { BookService } from './dashboardApp/library/books/book.service';
import { BookListComponent } from './dashboardApp/library/books/list/booklist.component';
import { AddBookComponent } from './dashboardApp/library/books/add/addbook.component';
import { EditBookComponent } from './dashboardApp/library/books/edit/editbook.component';
import { DeleteBookComponent } from './dashboardApp/library/books/delete/deletebook.component';
import { ViewBookComponent } from './dashboardApp/library/books/view/viewbook.component';
import { BookSearchComponent } from './dashboardApp/library/booksearch.component';
import { SearchPipe } from './dashboardApp/library/search.pipe';
import { LibrarySettingCmFormComponent } from './dashboardApp/library/librarysetting/librarysetting-cm-form-component';
import { LibrarysettingService } from './dashboardApp/library/librarysetting/librarysetting.service';
import { LibrarySettingListComponent } from './dashboardApp/library/librarysetting/list/librarysettinglist.component';
import { AddLibrarySettingComponent } from './dashboardApp/library/librarysetting/add/addlibrarysetting.component';
import { ViewLibrarySettingComponent } from './dashboardApp/library/librarysetting/view/viewlibrarysetting.component';
import { EditLibrarySettingComponent } from './dashboardApp/library/librarysetting/edit/editlibrarysetting.component';
import { DeleteLibrarySettingComponent } from './dashboardApp/library/librarysetting/delete/deletelibrarysetting.component';
import { BookAdditionalComponent } from './dashboardApp/library/bookAdditionalDetails/bookadditional.component';
import { BookaddService } from './dashboardApp/library/bookAdditionalDetails/bookadd.service';
import { SetGradingCmFormComponent } from './dashboardApp/examination/setGradingLevel/setgrading-cm-form-component';
import { SetgradingService } from './dashboardApp/examination/setGradingLevel/setgrading.service';
import { SetGradingListComponent } from './dashboardApp/examination/setGradingLevel/list/setgradinglist.component';
import { AddSetGradingComponent } from './dashboardApp/examination/setGradingLevel/add/addsetgrading.component';
import { ViewSetGradingComponent } from './dashboardApp/examination/setGradingLevel/view/viewsetgrading.component';
import { EditSetGradingComponent } from './dashboardApp/examination/setGradingLevel/edit/editsetgrading.component';
import { DeleteSetGradingComponent } from './dashboardApp/examination/setGradingLevel/delete/deletesetgrading.component';
import { ClassDesignationComponent } from './dashboardApp/examination/classDesignations/classdesignation.component';
import { DesignationService } from './dashboardApp/examination/classDesignations/designation.service';
import { IcseSettingsComponent } from './dashboardApp/examination/icseSettings/icsesettings.component';
import { IcseExamComponent } from './dashboardApp/examination/icseSettings/icseExam/icseexam.component';
import { IcseService } from './dashboardApp/examination/icseSettings/icseExam/icse.service';
import { AssessmentGroupComponent } from './dashboardApp/examination/icseSettings/internalAssessmentGroup/assessmentGroup.component';
import { AssessmentService } from './dashboardApp/examination/icseSettings/internalAssessmentGroup/assessment.service';
import { AssessmentSettingsComponent } from './dashboardApp/examination/icseSettings/internalAssessmentSettings/assessmentsettings.component';
import { WeightageGroupComponent } from './dashboardApp/examination/icseSettings/icseWeightages/weightagegroup.component';
import { WeightageService } from './dashboardApp/examination/icseSettings/icseWeightages/weightage.service';
import { RankingLevelComponent } from './dashboardApp/examination/rankingLevels/rankinglevel.component';
import { RankingService } from './dashboardApp/examination/rankingLevels/ranking.service';
import { CceSettingsComponent } from './dashboardApp/examination/cceSettings/ccesettings.component';
import { CceGradeComponent } from './dashboardApp/examination/cceSettings/basicSettings/ccegrade/ccegrade.component';
import { CceService } from './dashboardApp/examination/cceSettings/basicSettings/cce.service';
import { CceWeightageComponent } from './dashboardApp/examination/cceSettings/basicSettings/cceweightage/cceweightage.component';
import { CceExamComponent } from './dashboardApp/examination/cceSettings/basicSettings/cceexam/cceexam.component';
import { FormativeAssessmentComponent } from './dashboardApp/examination/cceSettings/scholasticSettings/formativeassessment.component';
import { FormativeService } from './dashboardApp/examination/cceSettings/scholasticSettings/formative.service';
import { CoScholasticSettingsComponent } from './dashboardApp/examination/cceSettings/scholasticSettings/coscholasticSettings/coscholasticsettings.component';
import { ExamManagementComponent } from './dashboardApp/examination/examManagement/exammanagement.component';
import { NewExamComponent } from './dashboardApp/examination/examManagement/newExam/newexam.component';
import { ExamService } from './dashboardApp/examination/examManagement/newExam/exam.service';
import { ClassExamComponent } from './dashboardApp/examination/examManagement/classWiseExam/classexam.component';
import { OnlineExamComponent } from './dashboardApp/examination/onlineExam/onlineexam.component';
import { OnlineService } from './dashboardApp/examination/onlineExam/online.service';
import { EventCreationComponent } from './dashboardApp/eventCreation/eventcreation.component';
import { EventService } from './dashboardApp/eventCreation/event.service';
import { DataManagementComponent } from './dashboardApp/dataManagement/datamanagement.component';
import { ManageService } from './dashboardApp/dataManagement/manage.service';
import { StoreComponent } from './dashboardApp/inventory/store/store.component';
import { StoreCategoryComponent } from './dashboardApp/inventory/store/storeCategory/storecategory.component';
import { StoreService } from './dashboardApp/inventory/store/storeCategory/store.service';
import { StoreTypeComponent } from './dashboardApp/inventory/store/storeType/storetype.component';
import { StoreDetailsComponent } from './dashboardApp/inventory/store/storeDetails/storedetails.component';
import { ItemComponent } from './dashboardApp/inventory/items/item.component';
import { ItemCategoryComponent } from './dashboardApp/inventory/items/itemCategory/itemcategory.component';
import { ItemService } from './dashboardApp/inventory/items/itemCategory/item.service';
import { ItemTypeComponent } from './dashboardApp/inventory/items/itemType/itemtype.component';
import { StoreItemComponent } from './dashboardApp/inventory/items/storeItem/storeitem.component';
import { SupplierComponent } from './dashboardApp/inventory/supplier/supplier.component';
import { SupplierService } from './dashboardApp/inventory/supplier/supplier.service';
import { PurchaseOrderComponent } from './dashboardApp/inventory/purchase/purchaseorder.component';
import { NewPurchaseComponent } from './dashboardApp/inventory/purchase/new/newpurchase.component';
import { PurchaseService } from './dashboardApp/inventory/purchase/new/purchase.service';
import { NewGrnComponent } from './dashboardApp/inventory/purchase/grn/newgrn.component';
import { DisciplineComponent } from './dashboardApp/discipline/discipline.component';
import { DiscService } from './dashboardApp/discipline/disc.service';
import { ApplicantRegistrationComponent } from './dashboardApp/applicantRegistration/applicantregistration.component';
import { ManageClassComponent } from './dashboardApp/applicantRegistration/manageClass/manageclass.component';
import { ApplicantService } from './dashboardApp/applicantRegistration/manageClass/applicant.service';
import { ManagePinComponent } from './dashboardApp/applicantRegistration/managePin/managepin.component';
import { PlacementComponent } from './dashboardApp/placement/placement.component';
import { PlaceService } from './dashboardApp/placement/place.service';
import { TaskManagementComponent } from './dashboardApp/tasks/taskmanagement.component';
import { TaskService } from './dashboardApp/tasks/task.service';





//Service
import { AccountService } from './accountApp/services/account.service'
import { LoginService } from './accountApp/services/login.service'
import { SignupService } from './accountApp/services/signup.service'
import { ConfirmMobleService } from './accountApp/services/confirm-mobile.service'

import { LocalstorageService } from './utilityApp/services/localstorage.service';
import { SharedService } from './utilityApp/services/shared.service';
import { NotificationService } from './utilityApp/services/notification.service';
import { Broadcaster } from './utilityApp/services/broadcaster';
import { MessageEvent } from './utilityApp/services/message_event';



import { Http, XHRBackend, RequestOptions } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { PageNotFoundComponent } from './pageNotFound/page-not-found.component';
import { BatchesComponent } from './dashboardApp/settings/acadamic/batches/batches.component';
import { ClassesComponent } from './dashboardApp/settings/acadamic/classes/classes.component';
import { SubjectsComponent } from './dashboardApp/settings/acadamic/subjects/subjects.component';
import {HttpService} from "./utilityApp/services/http.service";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardComponent,
    TopnavbarComponent,
    UserMasterComponent,
    LoginComponent,
    AddEmployeeComponent,
    ViewEmployeeComponent,
    AddSchoolComponent,
    DashboardComponent,
    AttendanceComponent,
    FinanceAssetManagementComponent,
    FinanceDonationComponent,
    FinanceFeeComponent,
    FinancePayslipComponent,
    FinanceReportComponent,
    FinanceCategoryComponent,
    FinanceTransactionComponent,
    HostelAdditionalDetailComponent,
    HostelFeeCollectionComponent,
    BatchFeeComponent,
    HostelFeeDefaulterComponent,
    HostelFeePayComponent,
    HostelReportComponent,
    HostelRoomAdditionalDetailComponent,
    HostelRoomCmFormComponent,
    SchoolListComponent,
    ViewSchoolComponent,
    EmployeeListComponent,
    SettingsComponent,
    AcadamicSettingsComponent,
    EmployeeSettingsComponent,
    PaymentSettingsComponent,
    StudentSettingsComponent,
    AddStudentComponent,
    StudentListComponent,
    TimetableComponent,
    TransportFeeCmFormComponent,
    FeeListComponent,
    AddFeeComponent,
    EditFeeComponent,
    ViewFeeComponent,
    DeleteFeeComponent,
    TransportManageRouteComponent,
    TransportManageVehicleComponent,
    TransportReportComponent,
    SetRouteCmFormComponent,
    SetRouteListComponent,
    AddSetRouteComponent,
    EditSetRouteComponent,
    DeleteSetRouteComponent,
    VehicleCmFormComponent,
    GeneralCmFormComponent,
    SchoolCmFormComponent,
    EmployeeCmFormComponent,
    DeleteEmployeeComponent,
    EditSchoolComponent,
    EditEmployeeComponent,
    DeleteSchoolComponent,
    DeleteStudentComponent,
    StudentCmFormComponent,
    ViewStudentComponent,
    EditStudentComponent,
    PageNotFoundComponent,
    BatchesComponent,
    ClassesComponent,
    AddClassComponent,
    ClassCmFormComponent,
    SubjectCmFormComponent,
    AddSubjectComponent,
    EditClassComponent,
    DeleteClassComponent,
    EditSubjectComponent,
    DeleteSubjectComponent,
    VehicleListComponent,
    AddVehicleComponent,
    EditVehicleComponent,
    DeleteVehicleComponent,
    ViewVehicleComponent,
    ViewSetRouteComponent,
    HostelCmFormComponent,
    HostelListComponent,
    AllocationListComponent,
    AddHostelComponent,
    EditHostelComponent,
    DeleteHostelComponent,
    ViewHostelComponent,
    CategoryPipe,
    Category,
    PayListComponent,
    AddBatchPayComponent,
    UserComponent,
    ManageComponent,
    ViewComponent,
    BatchFeeEditComponent,
    AddBatchFeeComponent,
    DeleteBatchFeeComponent,
    BatchPayComponent,
    CreateCategoryComponent,
    CreateParticularComponent,
    CreateDiscountComponent,
    UserPayComponent,
    GenerateFineComponent,
    NewDonationComponent,
    AdditionalFieldComponent,
    AddExpenseComponent,
    AddIncomeComponent,
    RevertedComponent,
    TransactionPipe,
    AddAssetComponent,
    AddLiabilityComponent,
    AddBuildingComponent,
    ClassTimingCmFormComponent,
    TimingListComponent,
    AddTimingComponent,
    EditTimingComponent,
    DeleteTimingComponent,
    ViewTimingComponent,
    CreateTimetableComponent,
    WeekdayTimingsComponent,
    BookCmFormComponent,
    BookListComponent,
    AddBookComponent,
    EditBookComponent,
    DeleteBookComponent,
    ViewBookComponent,
    BookSearchComponent,
    SearchPipe,
    LibrarySettingCmFormComponent,
    LibrarySettingListComponent,
    AddLibrarySettingComponent,
    ViewLibrarySettingComponent,
    EditLibrarySettingComponent,
    BookAdditionalComponent,
    DeleteLibrarySettingComponent,
    SetGradingCmFormComponent,
    SetGradingListComponent,
    AddSetGradingComponent,
    ViewSetGradingComponent,
    EditSetGradingComponent,
    DeleteSetGradingComponent,
    ClassDesignationComponent,
    IcseSettingsComponent,
    IcseExamComponent,
    AssessmentGroupComponent,
    WeightageGroupComponent,
    AssessmentSettingsComponent,
    RankingLevelComponent,
    CceSettingsComponent,
    CceGradeComponent,
    CceWeightageComponent,
    CceExamComponent,
    FormativeAssessmentComponent,
    CoScholasticSettingsComponent,
    NewExamComponent,
    ExamManagementComponent,
    ClassExamComponent,
    OnlineExamComponent,
    EventCreationComponent,
    DataManagementComponent,
    StoreComponent,
    StoreCategoryComponent,
    StoreTypeComponent,
    StoreDetailsComponent,
    ItemComponent,
    ItemCategoryComponent,
    ItemTypeComponent,
    StoreItemComponent,
    SupplierComponent,
    PurchaseOrderComponent,
    NewPurchaseComponent,
    NewGrnComponent,
    DisciplineComponent,
    ApplicantRegistrationComponent,
    ManageClassComponent,
    ManagePinComponent,
    PlacementComponent,
    TaskManagementComponent,
    SubjectsComponent



  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    AccountService,
    LoginService,
    SignupService,
    ConfirmMobleService,
    SchoolService,
    GeneralService,
    StudentSettingService,
    EmployeeSettingService,
    BatchService,
    EmployeeService,
    PaymentService,
    ClassService,
    SubjectService,
    StudentService,
    RouteService,
    VehicleService,
    FeeService,
    HostelService,
    BatchfeeService,
    BatchpayService,
    HosteladdService,
    RoomaddService,
    FincategoryService,
    CreatecatService,
    ParticularService,
    DiscountService,
    GenerateService,
    LocalstorageService,
    SharedService,
    NotificationService,
    Broadcaster,
    DonationService,
    AdditionalService,
    ExpenseService,
    IncomeService,
    AssetService,
    MessageEvent,
    LiabilityService,
    ManagerouteService,
    ManagevehicleService,
    BuildingService,
    TimetableService,
    TimingService,
    BookaddService,
    BookService,
    LibrarysettingService,
    SetgradingService,
    DesignationService,
    IcseService,
    WeightageService,
    AssessmentService,
    RankingService,
    FormativeService,
    ExamService,
    CceService,
    OnlineService,
    EventService,
    ManageService,
    StoreService,
    ItemService,
    SupplierService,
    PurchaseService,
    DiscService,
    ApplicantService,
    TaskService,
    PlaceService,

    {
      provide: Http,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpFactory(backend: XHRBackend, options: RequestOptions) {
  return new HttpService(backend, options);
}
