import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ApiService } from '../api.service'
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PaymentService } from '../payment.service'; 
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { StripeCardNumberComponent, StripeService } from 'ngx-stripe';
import {StripeCardElementOptions} from '@stripe/stripe-js';
import { Package } from '../models/package.model';
declare var $: any; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  

  showLoginTab: boolean;
  showAgeModal: boolean=false;
  showRegisterTab: boolean;
  isMoreTextVisible:boolean = false;
  showStripeModal:boolean = false;
  showPackageModal:boolean = false;
  showPolicyModal:boolean=false
  showRefundModal:boolean=false
  showTermsModal:boolean=false
  showLoadingModal:boolean=false
  packages: any[] = [];
  slides1: any[] = [];
  slides2: any[] = [];
  slideConfig1: any;
  slideConfig2: any;
  slideConfig3: any;
  slideConfig4: any;
  slideConfig5: any;
  slideConfig6: any;
  email: string = ''
  password: string = ''
  form: FormGroup;
  positionType: any = []
  businessType: any = []
  sportType: any = []
  ageType: any = []
  selectedSport: any
  form2: FormGroup;
  submitButtonClicked = false;
  form3: FormGroup
  selectedPackage: Package = null;
  cardsSearched:any=[]
  paymentForm:FormGroup
  planID:any
  elements: any; 
  cardElement: any; 
  mode:any
  
  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      
      if (fragment === 'regis') {
        this.showLoginTab = false;
        this.showRegisterTab = true;
      } else {
        
        this.showLoginTab = true;
        this.showRegisterTab = false;
      }
    });
  
    const videoPath = 'assets/video.mp4';
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(videoPath);
    
  }
  
  ngAfterViewInit(): void {
    var slider1 = $('.slider-1').slick({
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 0,
      speed:5000,
      pauseOnFocus: false,
      pauseOnHover: false,
      pauseOnDotsHover: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      fade: false,
      rtl: false,
      cssEase: 'linear',
      responsive: [
      {
        breakpoint: 1024,
        settings: {
        slidesToShow: 4,
        speed:5500,
        centerMode: false, /* set centerMode to false to show complete slide instead of 3 */
        slidesToScroll: 1
        
        }
      },
      {
        breakpoint: 767, 
        settings: {
          slidesToShow: 3,
          speed:6000,
          slidesToScroll: 1
          }
      },
      {
        breakpoint: 600, 
        settings: {
          slidesToShow: 2,
          speed:6000,
          slidesToScroll: 1
          }
      },
      
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }


     ]
  });

var slider2 = $('.slider-2').slick({
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 0,
      speed:5000,
      pauseOnFocus: false,
      pauseOnHover: false,
      pauseOnDotsHover: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      fade: false,
      rtl: true,
      cssEase: 'linear',
      responsive: [
      {
        breakpoint: 1024,
        settings: {
        slidesToShow: 4,
        speed:5500,
        centerMode: false, /* set centerMode to false to show complete slide instead of 3 */
        slidesToScroll: 1
        
        }
      },
      {
        breakpoint: 767, 
        settings: {
          slidesToShow: 3,
          speed:6000,
          slidesToScroll: 1
          }
      },
      {
        breakpoint: 600, 
        settings: {
          slidesToShow: 2,
          speed:6000,
          slidesToScroll: 1
          }
      },
      
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

     ]
  });




    
    $('.moreless-button-he').click(function() {
$('.moretext-he').slideToggle();
if ($('.moreless-button-he').text() == "Read more") {
  $(this).text("Read less")
} else {
  $(this).text("Read more")
}
});
  
  
    $('.moreless-buttonf').click(function() {
$('.moretextf').slideToggle();
if ($('.moreless-buttonf').text() == "Read more") {
  $(this).text("Read less")
} else {
  $(this).text("Read more")
}
});
  

    $('.moreless-button').click(function() {
$('.moretext').slideToggle();
if ($('.moreless-button').text() == "Read more") {
  $(this).text("Read less")
} else {
  $(this).text("Read more")
}
});
  
  
    $('.moreless-button2').click(function() {
$('.moretext2').slideToggle();
if ($('.moreless-button2').text() == "Read more") {
  $(this).text("Read less")
} else {
  $(this).text("Read more")
}
});
  
   
    $('.moreless-button3').click(function() {
$('.moretext3').slideToggle();
if ($('.moreless-button3').text() == "Read more") {
  $(this).text("Read less")
} else {
  $(this).text("Read more")
}
});
  
  
    $('.moreless-button4').click(function() {
$('.moretext4').slideToggle();
if ($('.moreless-button4').text() == "Read more") {
  $(this).text("Read less")
} else {
  $(this).text("Read more")
}
});
  
  
    $('.moreless-button5').click(function() {
$('.moretext5').slideToggle();
if ($('.moreless-button5').text() == "Read more") {
  $(this).text("Read less")
} else {
  $(this).text("Read more")
}
});
  
  
    $('.moreless-button6').click(function() {
$('.moretext6').slideToggle();
if ($('.moreless-button6').text() == "Read more") {
  $(this).text("Read less")
} else {
  $(this).text("Read more")
}
});
  
   
    $('.moreless-button7').click(function() {
$('.moretext7').slideToggle();
if ($('.moreless-button7').text() == "Read more") {
  $(this).text("Read less")
} else {
  $(this).text("Read more")
}
});
  
    
    $('.moreless-button8').click(function() {
$('.moretext8').slideToggle();
if ($('.moreless-button8').text() == "Read more") {
  $(this).text("Read less")
} else {
  $(this).text("Read more")
}
});
  
  
    $('.moreless-button9').click(function() {
$('.moretext9').slideToggle();
if ($('.moreless-button9').text() == "Read more") {
  $(this).text("Read less")
} else {
  $(this).text("Read more")
}
});
  
   
    $('.moreless-button10').click(function() {
$('.moretext10').slideToggle();
if ($('.moreless-button10').text() == "Read more") {
  $(this).text("Read less")
} else {
  $(this).text("Read more")
}
});
  
  
    $('.moreless-button11').click(function() {
$('.moretext11').slideToggle();
if ($('.moreless-button11').text() == "Read more") {
  $(this).text("Read less")
} else {
  $(this).text("Read more")
}
});
  
   
    $('.moreless-button12').click(function() {
$('.moretext12').slideToggle();
if ($('.moreless-button12').text() == "Read more") {
  $(this).text("Read less")
} else {
  $(this).text("Read more")
}
});
  
  
    $('.moreless-button13').click(function() {
$('.moretext13').slideToggle();
if ($('.moreless-button13').text() == "Read more") {
  $(this).text("Read less")
} else {
  $(this).text("Read more")
}
});
  
   
    $('.moreless-button14').click(function() {
$('.moretext14').slideToggle();
if ($('.moreless-button14').text() == "Read more") {
  $(this).text("Read less")
} else {
  $(this).text("Read more")
}
});
  
  
  }
  
  
  
  confirmAge() {
    
    this.showAgeModal=false;
      if (this.mode == 'signup') {
        this.mode = '';
        this.openPackageModal();
      }
      if (this.mode == 'login') {
        this.mode = '';
        this.login();
      }
    
  }
  
  closeAgeModal() {
   this.showAgeModal=false
  }
  
  openAgeModal(value: any) {
    this.mode = value;
    this.showAgeModal = true;
  }
  
  
    
    openPackageModal() {
      this.apiService.checkEmail(this.form3.get('registerEmail')?.value).subscribe(
        (response)=>{
          if(response.status=='Success' || response.message==='Email is already registered.'){
            alert("This Email is already Registered with another account!")
          }
          else{
            this.showPackageModal = true;
          }
        }
      )
    }
    openStripeModal() {
      this.showStripeModal = true;
      this.closePackageModal()
    }
    openTermsModal(){
      this.showTermsModal = true;
    }
    openRefundModal(){
      this.showRefundModal = true;
    }
    openPolicyModal(){
      this.showPolicyModal = true;
    }
    closeStripeModal() {
      this.showStripeModal = false;
    }
    closePackageModal() {
      this.showPackageModal = false;
    }
    closeTermsModal() {
      this.showTermsModal = false;
    }
    closePolicyModal() {
      this.showPolicyModal = false;
    }
    closeRefundModal() {
      this.showRefundModal = false;
    }
    
  
    // check route for mobile view for registration and login tab
    checkRoute(){
      this.route.fragment.subscribe(fragment => {
        
        if (fragment === 'regis') {
          this.showLoginTab = false;
          this.showRegisterTab = true;
        } else {
          this.showLoginTab = true;
          this.showRegisterTab = false;
        }
      });
    }
    
    // toggle read more buttons 
    toggleMoreText(): void {
      this.isMoreTextVisible = !this.isMoreTextVisible;
    }
    isMoreTextVisible2 = false;
    isMoreTextVisible3 = false;
    toggleMoreText2(): void {
      this.isMoreTextVisible2 = !this.isMoreTextVisible2;
    }
    toggleMoreText3(): void {
      this.isMoreTextVisible3 = !this.isMoreTextVisible3;
    }
  
  
  
    // search cards 
    searchCards(){
      
       const payload={
        state : this.form2.get('selectedStateType').value,
       city : this.form2.get('selectedCity').value,
       name : this.form2.get('selectedName').value,
       position : this.form2.get('selectedPositionType').value,
       business_type: this.form2.get('selectedBusinessType')?.value,
       sport_type: this.form2.get('selectedSportType')?.value,
       age_type: this.form2.get('selectedAgeType')?.value,
       
       
  
       }
      
      this.apiService.searchCard(payload).subscribe(
        (response)=>{
          this.cardsSearched=response.Cards
          console.log(response);
        }
      )
    }
    getPositionType(sport: any) {
      this.apiService.getPositionType(sport).subscribe(
        (response) => {
          this.positionType = response.types;
        }
      );
    }
    getAgeType() {
      this.apiService.getAgeType().subscribe(
        (response) =>
          this.ageType = response.types
      )
    }
    onSportTypeChange() {
  
      const selectedSport = this.form2.get('selectedSportType')?.value;
      if (selectedSport) {
        
        this.getPositionType(selectedSport);
      }
    }
    onRegisterSportTypeChange() {
  
      const selectedSport = this.form3.get('registerSportType')?.value;
      if (selectedSport) {
        this.getPositionType(selectedSport);
      }
    }
    
    selectPackage(selectedPackage: Package) {
      this.selectedPackage = selectedPackage;
      console.log(this.selectedPackage);
    }
  
  
  
    
    
    submitForm() {
  
      if (!this.form3.valid) {
        this.submitButtonClicked = true;
        
      }
      if (this.form3.valid) {
        this.submitButtonClicked = false;
      }
    }
  
  
  
  
    getBusniessType() {
      this.apiService.getBusinessType().subscribe(
        (response) =>
          this.businessType = response.Categories
      )
    }
    
  
  
  
    login() {
  
      
  
      const emailControl = this.form.get('email');
      const passwordControl = this.form.get('password');
  
      if (emailControl && passwordControl) {
        if (this.form.valid) {
          const email = emailControl.value;
          const password = passwordControl.value;
  
          this.apiService.publicLogin(email, 0, password).subscribe((response) => {
            if(response.status==200){
        localStorage.setItem('access_token', response.access_token);
        localStorage.setItem('firstname', response.user.firstname);
        localStorage.setItem('lastname', response.user.lastname);
        localStorage.setItem('phone', response.user.phone);
        localStorage.setItem('email', response.user.email);
        localStorage.setItem('user_id', response.user.id.toString());
        localStorage.setItem('pg_id', "0");
                    this.router.navigate(['/cards']);
            }
            
            else if(response.error=='Unauthorized'){
              alert("login Failed: Unauthorized")
            }
            else{
              alert("login Failed: Unauthorized")
            }
          },(error)=>{
            alert("login Failed: Unauthorized")
          });
        } else {
          alert("invalid login form")
        }
      }
    }
  
    
  
   // VALIDATORS FOR FORMS  
  
    emailMatchValidator = (control: AbstractControl): { [key: string]: boolean } | null => {
      const email = control.get('registerEmail');
      const confirmEmail = control.get('registerConfirmEmail');
  
      // Return an error if the emails don't match
      if (email?.value !== confirmEmail?.value) {
        return { emailMismatch: true };
      }
  
      return null;
    };
  
    expiryDateValidator(control: AbstractControl): ValidationErrors | null {
      const expiryDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/; // MM/YY format
      if (control.value && !expiryDatePattern.test(control.value)) {
        return { invalidExpiryDate: true };
      }
    
      const [month, year] = control.value.split('/');
      const currentYear = new Date().getFullYear() % 100;
      const currentMonth = new Date().getMonth() + 1;
    
      if (Number(year) < currentYear || (Number(year) === currentYear && Number(month) < currentMonth)) {
        return { expiredExpiryDate: true };
      }
    
      return null;
    }
    
    cardNumberValidator(control: AbstractControl): ValidationErrors | null {
      const cardNumberPattern = /^\d{16}$/; // Assuming 16 digits for a valid card number
      if (control.value && !cardNumberPattern.test(control.value)) {
        return { invalidCardNumber: true };
      }
      return null;
    }
    videoUrl: SafeResourceUrl;
  
    constructor(private apiService: ApiService, private fb: FormBuilder,  private http: HttpClient,private route: ActivatedRoute,
      private router: Router, private paymentService: PaymentService,private sanitizer: DomSanitizer) {
  
        const token = new URLSearchParams(window.location.search).get('token');
        const updatedPlanId=localStorage.getItem("updatePaypalId")
        
        if(updatedPlanId!=null && updatedPlanId){
          localStorage.setItem("updatedToken",token)
        }
        //check if user already available (redirect to cards)
  const email= localStorage.getItem('email')
  const access_token= localStorage.getItem('access_token')
  const user_id=localStorage.getItem('user_id')
  if (email !== null && email !== '' && access_token !== null && access_token !== '' && user_id !== null && user_id !== '') {
  this.router.navigate(['/cards'])}
        
  
  
    
        
        if(token && (updatedPlanId=='' || updatedPlanId==null)){
          this.showLoadingModal=true
          
          this.apiService.executeAggrement(token)
          .subscribe(
            (response) => {
              // Subscription is now active
              if(response.status=='Success'){
                console.log("Billing agreement executed successfully", response);
                this.paymentService.paypal_Register_user(response.subscription_id)
              }
              
              
            },
            (error) => {
              console.error("Failed to execute billing agreement", error);
              this.showLoadingModal=false
                alert("Failed to Verify Paypal Payment")
                window.location.href='https://umyosportscards.com'
            }
          );
        }
  
        
  
  
  
      // form is login form 
      // form2 is search of cards form 
      // from 3 is registration form 
    const cvcLength = 3;
    this.paymentForm = this.fb.group({
    cardNumber: ['', [Validators.required, this.cardNumberValidator]],
    expiryDate: ['', [Validators.required, this.expiryDateValidator]],
    cvc: ['', [Validators.required, Validators.minLength(cvcLength), Validators.maxLength(cvcLength)]],
  });
      this.form = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
      });
  
      this.form2 = this.fb.group({
        
    
        
      selectedBusinessType: [''],
      selectedAgeType: [''],
      selectedSportType: [''],
      selectedPositionType: [''],
      selectedStateType: [''],
      selectedName: [''],
      
      
      
      selectedCity: [''],


     
        
        

      });
      this.form3 = this.fb.group({
        registerFirstName: ['', Validators.required],
        registerLastName: ['', Validators.required],
        registerEmail: ['', [Validators.required, Validators.email]],
        registerConfirmEmail: ['', [Validators.required, Validators.email]],
        registerPassword: ['', [Validators.required, Validators.minLength(6)]],
        registerPhone: ['', Validators.required],
        registerCityType: ['', Validators.required],
      registerBusinessType: ['', Validators.required],
      registerAgeType: ['', Validators.required],
      registerSportType: ['', Validators.required],
      registerPositionType: ['', Validators.required],
      registerStateType: ['', Validators.required],
      registerReferralCode: [''], // Not required
        


      }, { validators: this.emailMatchValidator })

      this.getBusniessType()

    this.getAgeType()
    this.getSportType()

    
      // fetch packages
      this.apiService.getSignUpPackages(null).subscribe(
        (response) => {
          this.packages = response.Package
          console.log(response.Package);
        },
        (error) => {
          console.error('Error fetching users:', error);
        }
      );
  
      this.slideConfig1 = {
        dots: false,
        arrows:false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1,
        speed: 5000,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        rtl: false,
        cssEase: 'linear'
      };
  
  
      this.slideConfig2 = {
        arrows:false,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1,
        speed: 5000,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        slidesToShow:1,
        slidesToScroll: 1,
        fade: false,
        rtl: true,
        cssEase: 'linear'
      };
      this.slideConfig3 = {
        dots: false,
        arrows:false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1,
        speed: 5000,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        rtl: false,
        cssEase: 'linear'
      };
  
  
      this.slideConfig4 = {
        arrows:false,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1,
        speed: 5000,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        slidesToShow:4,
        slidesToScroll: 1,
        fade: false,
        rtl: true,
        cssEase: 'linear'
      };
      this.slideConfig5 = {
        dots: false,
        arrows:false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1,
        speed: 5000,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        fade: false,
        rtl: false,
        cssEase: 'linear'
      };
  
  
      this.slideConfig6 = {
        arrows:false,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1,
        speed: 5000,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        slidesToShow:2,
        slidesToScroll: 1,
        fade: false,
        rtl: true,
        cssEase: 'linear'
      };
  
  
      this.slides1 = [
        { img: 'assets/img/logo2/blackwall.png' },
        { img: 'assets/img/logo2/events.png' },
        { img: 'assets/img/logo2/logo2.png' },
        { img: 'assets/img/logo2/logo3.png' },
        { img: 'assets/img/logo2/logo4.png' },
        { img: 'assets/img/logo2/logo5.png' },
        { img: 'assets/img/logo2/logo6.png' },
        { img: 'assets/img/logo2/logo7.png' },
        { img: 'assets/img/logo2/logo8.png' },
        { img: 'assets/img/logo2/logo9.png' },
        { img: 'assets/img/logo2/logo10.png' },
  
      ];
  
  
      this.slides2 = [
        { img: 'assets/img/logo2/logo11.png' },
        { img: 'assets/img/logo2/logo12.png' },
        { img: 'assets/img/logo2/logo13.png' },
        { img: 'assets/img/logo2/logo14.png' },
        { img: 'assets/img/logo2/logo15.png' },
        { img: 'assets/img/logo2/logo16.png' },
        { img: 'assets/img/logo2/pledge.png' },
        { img: 'assets/img/logo2/logo9.png' },
        { img: 'assets/img/logo2/umyo_market.png' },
        { img: 'assets/img/logo2/logo8.png' },
        { img: 'assets/img/logo2/umyodate.png' },
  
      ];
  
    }
    getSportType() {
      this.apiService.getSportType().subscribe(
        (response) =>
          this.sportType = response.types
      )
    }
  
    
    
  
  
  
  // STRIPE PAYMENT 
  @ViewChild(StripeCardNumberComponent) card: StripeCardNumberComponent;
  
  public cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        fontWeight: 400,
        fontFamily: 'Circular',
        fontSize: '14px',
        iconColor: '#666EE8',
        color: '#002333',
        '::placeholder': {
          color: '#919191',
        },
      },
    },
  };
  
  pay(): void {
  this.paymentService.createPaymentIntent(this.paymentForm, this.form3,this.selectedPackage);   
  this.closePackageModal()
  this.closeStripeModal()
    
  }
  
  
  //PAYPAL PAYMENT 
  
  paypalClick(){
   this.closePackageModal()
   this.showLoadingModal=true
   this.paymentService.paypal_create_billing_plan(this.form3,this.selectedPackage)
  }
  
  
  // CONTINUE PAYMENT FOR TESTING  OF 0$
  
  continuePaymentButton(){
    this.paymentService.testing(this.form3,this.selectedPackage);
  }
  
  
  
  }