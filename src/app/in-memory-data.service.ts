import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const schools = [
		{id:0,name:'kosaki',domainName:'shshs',address1:"add1",address2:"add2",city:"Bangalore",state:"Karnataka",pincode:"560061",
		email:'keqifizyb@gmail.com',phone1:"123456",phone2:"12345",fax:"12345"},
		{id:1,name:'kosaki1',domainName:'kosaki',address1:"add1",address2:"add2",city:"Bangalore",state:"Karnataka",pincode:"560061",
		email:'keqifizyb@gmail.com',phone1:"12345",phone2:"12345",fax:"12345"}

	];
    const employees = [
      {id:0,empNumber:'123',firstName:'xwer',middleName:"qwerty",lastName:"yert",joinDate:"20/10/17",status:"male",email:"xwer@gmail.com",dob:"10/06/16",grade:"A",
        department:"1",category:"2",jobTitle:"developer",qualification:'M.S',experience:"2+",totalExperience:"12/05/10",
        maritalStatus:"single",fatherName:"dwe",motherName:"einj",blood:"O+",country:"INDIA",addLine1:"1/245 road1",addLine2:"xxwert",
      city:"atp",state:"AP",country1:"INDIA",pincode:"560047",offPhone1:"876543287",offPhone2:"4567899098",mobilePhone:"8765432765",
      homePhone:"765456789",fax:"54356"},
      {id:1,empNumber:'123',firstName:'wwww',middleName:"qwerty",lastName:"ttt",joinDate:"20/10/17",status:"female",email:"xwer@gmail.com",dob:"10/06/16",grade:"B",
        department:"1",category:"2",jobTitle:"developer",qualification:'M.S',experience:"2+",totalExperience:"12/05/10",
        maritalStatus:"single",fatherName:"dwe",motherName:"einj",blood:"O+",country:"INDIA",addLine1:"1/245 road1",addLine2:"xxwert",
        city:"atp",state:"AP",country1:"INDIA",pincode:"560047",offPhone1:"876543287",offPhone2:"4567899098",mobilePhone:"8765432765",
        homePhone:"765456789",fax:"54356"}

    ];
    const students = [
      {id:0,firstName:'vaidya',middleName:'swami',lastName:'nathan',admissionNumber:'1',admissionDate:'17/02/74',dob:"10/02/23",blood:"O+",
      birthPlace:"hyderabad",nationality:"INDIAN",mobile:"5678908765",motherTongue:"Telugu",addLine1:"1/245 road1",addLine2:"xxwert",
        city:"atp",state:"AP",country:"INDIA",pincode:"560047",phone:"56789543432",mobile1:"4567893224",email:"asedr@gmail.com",
        classSelect:"X",batch:"2016",rollNo:"2345",biometric:"234",parentFirstName:"fjwkfd",parentLastName:"iefjeo",relation:"sefeef",
      parentdob:"12/01/23",education:"degree",occupation:"business",income:"10000$",parentEmail:"awdw@gmail.com",parentAddLine1:"wefew",
        parentAddLine2:"sefe",parentCity:"sefe",parentState:"ewfje",parentCountry:"enfdw",parentPincode:"543223",parentPhone1:"876543222",
        parentPhone2:"87654323456"},
      {id:1,firstName:'vaidya1',middleName:'swami1',lastName:'nathan1',admissionNumber:'2',admissionDate:'17/02/74',dob:"10/02/23",blood:"O+",
        birthPlace:"hyderabad",nationality:"INDIAN",mobile:"5678908765",motherTongue:"Telugu",addLine1:"1/245 road1",addLine2:"xxwert",
        city:"atp",state:"AP",country:"INDIA",pincode:"560047",phone:"56789543432",mobile1:"4567893224",email:"tryytr@gmail.com",
        classSelect:"X",batch:"2016",rollNo:"2345",biometric:"236",parentFirstName:"fjwkfd",parentLastName:"iefjeo",relation:"sefeef",
      parentdob:"12/01/23",education:"degree",occupation:"business",income:"10000$",parentEmail:"awdw@gmail.com",parentAddLine1:"wefew",
        parentAddLine2:"sefe",parentCity:"sefe",parentState:"ewfje",parentCountry:"enfdw",parentPincode:"543223",parentPhone1:"876543222",
        parentPhone2:"87654323456"}

    ];
    const generals = [
      {id:0,collegeName:'smet',addline1:'ejfenf',addline2:'rfrefrf',city:'atp',state:'AP',zip:'65432',country:'INDIA',institution:'1',
    attendance:'2',week:'Monday',dateFormat:'DMY',dateSeparator:'/',financeStart:'10/01/15',financeEnd:'10/01/17',receipt:'ferr',
    language:'English',timezone:'(GMT +5:30) Bombay, Calcutta, Madras, New Delhi',currency:'INR',precision:'der',upload:'ed.jpeg',
        grade:'GPA',moodle:'khe',theme:'Blue',font:'Green',incrementAdmission:'ferfrf',incrementEmployee:'crfce',comment:'sdce',
        sibling:'cee',passwordChange:'efrer',rollNo:'54'},
      {id:1,collegeName:'rvfr',addline1:'ejfevnf',addline2:'erfrf',city:'atp',state:'AP',zip:'65432',country:'INDIA',institution:'1',
        attendance:'2',week:'Monday',dateFormat:'DMY',dateSeparator:'/',financeStart:'10/01/15',financeEnd:'10/01/17',receipt:'ferr',
        language:'English',timezone:'(GMT +5:30) Bombay, Calcutta, Madras, New Delhi',currency:'INR',precision:'der',upload:'ed.jpeg',
        grade:'GPA',moodle:'kejd',theme:'Blue',font:'Green',incrementAdmission:'ferfrf',incrementEmployee:'crfce',comment:'sdce',
        sibling:'cee',passwordChange:'efrer',rollNo:'54'},
    ];


    const batches = [
      {id:0,name:"efe",startDate:'10/01/16',endDate:'12/03/17'},
      {id:1,name:"wef",startDate:'13/01/16',endDate:'10/03/17'},
    ];

    const classmodels = [
      {id:0,name:"efe",sectionName:'ecerr',code:'432',grading:'A',elective:'frre',newName:'err',batch:'A',startDate:'10/01/16',
        endDate:'12/03/17'},
      {id:1,name:"wef",sectionName:'ecerr',code:'432',grading:'A',elective:'frre',newName:'err',batch:'A'
        ,startDate:'13/01/16',endDate:'10/03/17'},
    ];

    const subjects = [
      {id:0,name:"efe",selectBatch:'1',code:'432',classes:'A',exam:'a'},
      {id:1,name:"wef",selectBatch:'2',code:'432',classes:'A',exam:'s'},
    ];

    const studentsettings =[
      {id:0,category:'rffer',editCategory:'vrrvfr'},
      {id:1,category:'rfgyh',editCategory:'frref'},
    ];

    const employeesettings =[
      {id:0,name:'rffer',prefix:'vrrvfr',status:'active',editName:'rffer',editPrefix:'vrrvfr',editStatus:'active'},
      {id:1,name:'rfgyh',prefix:'frref',status:'active',editName:'trt5y5',editPrefix:'vrrtvfr',editStatus:'active'},
    ];

    const payments = [
      {id:0,email:'abccd@gmail.com',button:'save'},
      {id:1,email:'abder@gmail.com',button:'edit'},
    ];

    const setroutes = [
      {id:0,destination:'efwef',cost:'2344',route:'Route 1'},
      {id:1,destination:'vchgj',cost:'576',route:'Route 1'},
    ];

    const vehicles = [
      {id:0,number:'323',seat:'3',route:'Route 1',status:'1'},
      {id:1,number:'4545',seat:'4',route:'Route 1',status:'2'},
    ];

    const fees = [
      {id:0,name:'efewfe',startDate:'3/10/17',endDate:'5/10/17',dueDate:'10/2/17',employee:'gfc',subject1:'G1-G2'},
      {id:1,name:'erfre',startDate:'5/10/17',endDate:'5/10/17',dueDate:'10/2/17',employee:'gfc',subject1:'G1-G2'},
    ];

    const hostels = [
      {id:0,name:'dgftt',type:'Gents',information:'erfter'},
      {id:1,name:'ujuyuy',type:'Gents',information:'erfter'},
    ];

    const batchfees = [
      {id:0,name:'dgftt',startDate:'1/10/17',endDate:'5/9/17',editDate:'1/12/17'},
      {id:1,name:'ujuyuy',startDate:'13/10/17',endDate:'05/10/17',editDate:'10/6/17'},
    ];
    const batchpays = [
      {id:0,batch:'dgftt',fee:'edewd',notes:'efew',number:'2432',selectPayment:'cash'},

    ];

    const hosteladds = [
      {id:0,name:'dgftt',status:'Active',check:'2432',select:'Text Box'},
      {id:1,name:'dgftt',status:'Active',check:'2432',select:'Text Box'},
    ];

    const roomadds = [
      {id:0,name:'dgftt',status:'Active',check:'2432',select:'Text Box'},
      {id:1,name:'dgftt',status:'Inactive',check:'2432',select:'Text Box'},
    ];

    const fincategorys = [
      {id:0,name:'dgftt',description:'sececw',income:'cee'},
      {id:1,name:'erere',description:'wedeww',income:'ce'},
    ];

    const createcats = [
      {id:0,name:'ujnyunyu',description:'nytnt',status:'123-126'},
      {id:1,name:'wedwe',description:'eweww',status:'G1-G2'},
    ];

    const particulars = [
      {id:0,name:'fthyhj',description:'nytnt',options:'Admission No',student:'2015',amount:'2343',category:'2014'},
      {id:1,name:'wedwe',description:'eweww',options:'Admission No',student:'2015',amount:'2343',category:'2014'},
    ];

    const discounts = [
      {id:0,name:'jyjy',type:'student',status:'Amount',fee:'2015',percent:'23'},
      {id:1,name:'wedwe',type:'student',status:'Amount',fee:'2016',percent:'23'},
    ];

    const generates = [
      {id:0,name:'efefs',category:'category 1',status:'Amount',due:'434',amount:'23454'},
      {id:1,name:'wedwe',category:'category 2',status:'Amount',due:'23234',amount:'456454'},
    ];

    const donations = [
      {id:0,name:'ewfr',description:'efewfref',transaction:'10/02/2017',amount:'23454'},
      {id:1,name:'tgtrrt',description:'wede',transaction:'23/05/2015',amount:'456454'},
    ];

    const additionals = [
      {id:0,name:'ewfr',input:'Text Area',need:'sefe',status:'Active'},
      {id:1,name:'tgtrrt',input:'Text Area',need:'wef',status:'Active'},
    ];

    const expenses = [
      {id:0,title:'okorr',description:'fhewofwfe',date:'10/01/2017',category:'Refund',amount:'23245'},
      {id:1,title:'irjfoe',description:'dnfkss',date:'16/04/2017',category:'Inventory',amount:'454645'},
    ];

    const incomes = [
      {id:0,title:'gtkrer',description:'edneke',date:'10/01/2017',category:'Refund',amount:'23245'},
      {id:1,title:'vjere',description:'rgnmrk',date:'16/04/2017',category:'Inventory',amount:'454645'},
    ];

    const assets = [
      {id:0,title:'xdrd',description:'yujuyj',amount:'4565'},
      {id:1,title:'fvdr',description:'trht',amount:'9089'},
    ];

    const liabilitys = [
      {id:0,title:'eirje',description:'errty',amount:'6483'},
      {id:1,title:'endewi',description:'oiuhrj',amount:'9047'},
    ];

    const manageroutes = [
      {id:0,name:'jgror',category:'Text Box',status:'Active',check:'Is Mandetory'},
      {id:1,name:'erknmf',category:'Check Box',status:'Inactive',check:''},
    ];

    const managevehicles = [
      {id:0,name:'jgror',category:'Text Box',status:'Active',check:'Is Mandetory'},
      {id:1,name:'erknmf',category:'Check Box',status:'Inactive',check:''},
    ];

    const buildings = [
      {id:0,buildingName:'jgror',roomName:'hjujjuj',capacity:'5'},
      {id:1,buildingName:'erfr',roomName:'rcree',capacity:'5'},
    ];

    const timings = [
      {id:0,name:'jgror',startTime:'08:22 AM',endTime:'20:20:50'},
      {id:1,name:'erfr',startTime:'10:15 PM',endTime:'16:30:06'},
    ];

    const timetables = [
      {id:0,startDate:'10/02/1992',endDate:'23/04/2015',batch:'Batch 1'},
      {id:1,startDate:'16/01/1995',endDate:'20/04/2015',batch:'Batch 2'},
    ];

    const books = [
      {id:0,mode:'General',bookNumber:'34665',title:'welcome',author:'Pavan',tag:'je',custom:'ekd',copies:'6'},
      {id:1,mode:'General',bookNumber:'86575',title:'Bye',author:'Pavan',tag:'je',custom:'erfe',copies:'8'},
    ];

    const librarysettings = [
      {id:0,libclass:'toggrt',category:'Test',time:'15',issue:'effrn'},
      {id:1,libclass:'nerere',category:'BC',time:'25',issue:'rifr'},
    ];

    const bookadds = [
      {id:0,name:'tkrrt',input:'Test Box',mandetory:'rtt',status:'Active'},
      {id:1,name:'ngfjfd',input:'Test Box',mandetory:'df',status:'Inactive'},
    ];

    const setgradings = [
      {id:0,name:'gtthr',score:'92',points:'234',description:'maths'},
      {id:1,name:'rkfjrr',score:'95',points:'434',description:'science'},
    ];

    const designations = [
      {id:0,name:'hngh',marks:'92',selectClass:'Test 1' },
      {id:1,name:'fmfjt',marks:'95',selectClass:'Test' },
    ];

    const icses = [
      {id:0,name:'krtr',description:'ujuj',report:'Yes' },
      {id:1,name:'rmr',description:'vftt',report:'No' },
    ];

    const assessments = [
      {id:0,name:'krtr',description:'ujuj',exam:'H1',groupName:'rrthyr',indicator:'ijdw',max:'67' },
      {id:1,name:'rmr',description:'vftt',exam:'K1',groupName:'rfere',indicator:'rfjr',max:'87' },
    ];

    const weightages = [
      {id:0,name:'krtr',iaweightage:'92',eaweightage:'65',curricular:'Yes',report:'Grade',exam:'H1' },
      {id:1,name:'rmr',iaweightage:'82',eaweightage:'78',curricular:'No',report:'Grade',exam:'H1' },
    ];

    const rankings = [
      {id:0,name:'krtr',selectClass:'Test',marks:'65',limit:'Upper',subjects:'67',subLimit:'Upper',batches:'r' },
      {id:1,name:'rmr',selectClass:'Test',marks:'78',limit:'Upper',subjects:'87',subLimit:'Upper',batches:'t' },
    ];

    const cces = [
      {id:0,name:'krtr',weight:'etrtr',criteria:'FA',exam:'Test 1',examName:'rtie',description:'ifejde' },
      {id:1,name:'rmr',weight:'etrtr',criteria:'FA',exam:'Test 1',examName:'rtie',description:'ifejde' },
    ];

    const formatives = [
      {id:0,name:'krtr',criteria:'Avg Of Descriptive Indicators',exam:'Test 1',description:'ifejde',scholasticName:'irgjr',
        scholasticDescription:'fnrefke',headerName:'ngrr',type:'Co Scholastic Area',set:'Set 1' },
      {id:1,name:'kijki',criteria:'Avg Of Descriptive Indicators',exam:'Test 1',description:'ifejde',scholasticName:'irgjr',
        scholasticDescription:'fnrefke',headerName:'tnr',type:'Co Scholastic Area',set:'Set 1' },
    ];

    const exams = [
      {id:0,name:'krtr',type:'marks',max:'100',min:'40',examName:'kuhku',selectClass:'Test',selectBatch:'123-126',examType:'Marks'},
      {id:1,name:'rmr',type:'marks',max:'100',min:'40',examName:'ijijl',selectClass:'Test',selectBatch:'123-126',examType:'Marks'},
    ];

    const onlines = [
      {id:0,name:'okonjkn',startDate:'10/02/14',endDate:'10/03/15',max:'40',percentage:'77',type:'General',batch:'G1 - G2',format:'Objective'},
      {id:1,name:'nkknk',startDate:'11/02/17',endDate:'10/03/20',max:'40',percentage:'77',type:'General',batch:'G1 - G2',format:'Objective'},
    ];

    const events = [
      {id:0,title:'mdee',startDate:'10/02/14',endDate:'10/03/15',common:'h',holiday:'f',description:'okdod'},
      {id:1,title:'feee',startDate:'11/02/17',endDate:'10/03/20',common:'k',holiday:'j',description:'okdkd'},
    ];

    const manages = [
      {id:0,name:'mdee',fname:'hfjee',input:'Text Box',description:'okdod'},
      {id:1,name:'rfjrfe',fname:'hfjee',input:'Text Box',description:'okdod'},
    ];

    const stores = [
      {id:0,name:'mdee',code:'456',storeName:'gtre',storeCode:'564',detailsName:'rfer',detailsCode:'654',type:'Type 1',category:'Category 1',
      invoice:'eded'},
      {id:1,name:'rfjrfe',code:'567',storeName:'vgty',storeCode:'768',detailsName:'njdhf',detailsCode:'089',type:'Type 2',category:'Category 1',
        invoice:'eded'},
    ];

    const items = [
      {id:0,name:'mdee',code:'456',itemName:'gtre',itemCode:'564',storeName:'rfer',storeCode:'654',store:'Type 1',quantity:'45',
        unit:'10',tax:'60'},
      {id:1,name:'rfjrfe',code:'567',itemName:'vgty',itemCode:'768',storeName:'njdhf',storeCode:'089',store:'Type 2',quantity:'67',
        unit:'10',tax:'80'},
    ];

    const suppliers = [
      {id:0,name:'mdee',contact:'456',address:'gtre',tin:'564',region:'rfer',help:'654',type:'Type 1' },
      {id:1,name:'rfjrfe',contact:'567',address:'vgty',tin:'768',region:'njdhf',help:'089',type:'Type 2' },
    ];

    const purchases = [
      {id:0,indents:'indent 1',order:'456',store:'store 1',type:'Type 1',supplier:'supplier 1',date:'10/04/2015',reference:'dfrerfe',
      number:'34535',purchase:'PO',date1:'10/02/2001',date2:'12/03/2003',other:'dece',invoice:'wede' },
      {id:1,indents:'indent 1',order:'456',store:'store 1',type:'Type 1',supplier:'supplier 1',date:'10/04/2015',reference:'dfrerfe',
        number:'34535',purchase:'PO',date1:'10/02/2001',date2:'12/03/2003',other:'dece',invoice:'wede' },
    ];

    const discs = [
      {id:0,title:'mdee',number:'456',date:'12/06/2000',complainBy:'gtre',against:'rfer',responsible:'rtyr',description:'uyut' },
      {id:1,title:'rrfe',number:'567',date:'11/04/2000',complainBy:'vgty',against:'njdhf',responsible:'dfrgt',description:'nuujt' },
    ];

    const applicants = [
      {id:0,class:'Class 1',score:'456',registration:'Registration 1',amount:'5657',active:'Active',pin:'Active',approval:'Active',
        additional:'tyjytnjr',name:'rty',amount1:'45',active1:'er',from:'20/02/1992',till:'12/09/2004',count:'45',classes:'r' },
      {id:1,class:'Class 1',score:'456',registration:'Registration 1',amount:'5657',active:'Active',pin:'Active',approval:'Active',
        additional:'lkrf',name:'rer',amount1:'45',active1:'er',from:'20/02/1992',till:'12/09/2004',count:'45',classes:'yu'  },
    ];

    const places = [
      {id:0,title:'mdee',date:'12/06/2000',company:'TCS',description:'uyut' },
      {id:1,title:'rrfe',date:'11/04/2000',company:'Wipro',description:'nuujt' },
    ];

    const tasks = [
      {id:0,title:'mdee',startDate:'12/06/2000',endDate:'12/09/2019',department:'English',class:'123 -123',description:'uyut'},
      {id:1,title:'rrfe',startDate:'12/06/2000',endDate:'12/09/2019',department:'English',class:'123 -123',description:'nuujt' },
    ];


    return { schools,employees,students,generals,studentsettings,employeesettings,payments,setroutes,vehicles,fees,
      batches,classmodels,subjects,hostels,batchfees,batchpays,hosteladds,roomadds,fincategorys,createcats,particulars,
      discounts,generates,donations,additionals,expenses,incomes,assets,liabilitys,manageroutes,managevehicles,buildings,
    timings,timetables,books,librarysettings,bookadds,setgradings,designations,icses,assessments,weightages,rankings,
    cces,formatives,exams,onlines,events,manages,stores,items,suppliers,purchases,discs,applicants,places,tasks };
  }

}


