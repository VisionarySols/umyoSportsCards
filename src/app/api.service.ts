import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

// const baseUrl = "https://flyeats.co.uk/umy/public/api/";
// const baseUrl = "https://visionarysols.com/ProlivingBiz/public/api/";
// const baseUrl = "http://127.0.0.1:8000/api/";

const baseUrl = environment.apiUrl; //" https://prolivingbiz.com/api_umyocards/public/api/";





@Injectable({
  providedIn: 'root'

})

export class ApiService {


  constructor(private http: HttpClient) { }

  getAllUsers(bearerToken: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${bearerToken}`,
    })

    return this.http.post(baseUrl + `getAllUsers`, {}, { headers });
  }
  getSupportAgent(bearerToken: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${bearerToken}`,
    });

    return this.http.post(baseUrl + `getSupportAgent`, {}, { headers });
  }
  getPackages(bearerToken: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${bearerToken}`,
    });

    return this.http.post(baseUrl + `getPackages`, {}, { headers });
  }


  getReferals(bearerToken: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${bearerToken}`,
    });

    return this.http.post(baseUrl + `listOfReferals`, {}, { headers });
  }




  getChatRecord(bearerToken: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${bearerToken}`,
    });

    return this.http.post(baseUrl + `getChatRecord`, {}, { headers });
  }

  updateAdminPassword(bearerToken: string, payload: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${bearerToken}`,
    });

    return this.http.post(baseUrl + `updatePasswordAdmin`, payload, { headers });
  }



  getUserById(userId: number): Observable<any> {
    const url = baseUrl + `userData`;
    const payload = { user_id: userId.toString() };


    return this.http.post(url, payload);
  }
  getUserData(user_id: any, friend_id: any): Observable<any> {
    const url = baseUrl + `userData`;
    const payload = { user_id: user_id, friend_id: friend_id };


    return this.http.post(url, payload);
  }
  createBillingPlan(payload: any): Observable<any> {
    const url = baseUrl + `create-billing-plan`;
    return this.http.post(url, payload);
  }
  cancelPaypalSubscription(user_id: any,agreement_id:any): Observable<any> {
    const url = baseUrl + `cancel-paypal-subscription`;
    return this.http.post(url, {"user_id":user_id,"agreement_id":agreement_id});
  }
  updatePaypalKeys(user_id: any,subscription_id:any,plan_id:any): Observable<any> {
    const url = baseUrl + `update-paypal-keys`;
    return this.http.post(url, {"user_id":user_id,"subscription_id":subscription_id,"plan_id":plan_id});
  }
  
  executeAggrement(token:any): Observable<any> {
    const url = baseUrl + `execute-agreement`;
    return this.http.post(url, {"token":token});
  }


  resetPassword(email: any): Observable<any> {
    const url = baseUrl + `resetPassword`;
    return this.http.post(url, {"email":email});
  }



  sendRequest(user_id: any, friend_id: any): Observable<any> {
    const url = baseUrl + `sendRequest`;
    const payload = { user_id: user_id, friend_id: friend_id };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });
    


    return this.http.post(url, payload);
  }
  myRequests(user_id: any): Observable<any> {
    const url = baseUrl + `myRequests`;
    const payload = { user_id: user_id };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });
    
 const options = {
    headers: headers,
  };


    return this.http.post(url, payload,options);
  }
  acceptRequest(request_id: any): Observable<any> {
    const url = baseUrl + `acceptRequest`;
    const payload = { request_id: request_id };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });
    


    return this.http.post(url, payload);
  }




  updateUser(user: any): Observable<any> {
    const url = baseUrl + `editUser`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });

 const options = {
    headers: headers,
  };

    


    return this.http.post(url, user,options);
  }

  applyForReferral(user_id: any): Observable<any> {
    const url = baseUrl + `applyForReferral`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });
 const options = {
    headers: headers,
  };


    


    return this.http.post(url, { "user_id": user_id },options);
  }
  savePaymentInfo(user_id: any, payment_id: any, payment_type: any): Observable<any> {
    const url = baseUrl + `savePaymentInfo`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });

 const options = {
    headers: headers,
  };

    


    return this.http.post(url, { "user_id": user_id, "payment_id": payment_id, "payment_type": payment_type }, options);
  }
  changePassword(email: any, old_password: any, new_password: any): Observable<any> {
    const url = baseUrl + `changePassword`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });


     const options = {
    headers: headers,
  };



    return this.http.post(url, { "email": email, "old_password": old_password, "new_password": new_password },options);
  }



  cancelSubscription(user_id: any, agreement_id: any): Observable<any> {
    const url = baseUrl + `cancel-paypal-subscription`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });


    
 const options = {
    headers: headers,
  };


    return this.http.post(url, { "user_id": user_id, "agreement_id": agreement_id }, options);
  }

  


  incrementCardView(card_id:any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      
    });
  
    return this.http.post(baseUrl + `incrementTotalViews`, {"card_id":card_id}, { headers });
  }

  incrementCardShare(card_id:any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      
    });
  
    return this.http.post(baseUrl + `incrementSend`, {"card_id":card_id}, { headers });
  }


  getActivity(user_id: any): Observable<any> {
    const url = baseUrl + `getActivity`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });


     const options = {
    headers: headers,
  };



    return this.http.post(url, { "user_id": user_id },options);
  }
  deleteActivity(user_id: any, activity_id): Observable<any> {
    const url = baseUrl + `deleteActivity`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });


     const options = {
    headers: headers,
  };



    return this.http.post(url, { "user_id": user_id, "activity_id": activity_id },options);
  }





  openChat(chat_id: any): Observable<any> {
    const url = baseUrl + `getLiveChat`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });


     const options = {
    headers: headers,
  };



    return this.http.post(url, { "chat_id": chat_id },options);
  }
  getMessages(user_id: any, friend_id: any): Observable<any> {
    const url = baseUrl + `getMessages`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });

 const options = {
    headers: headers,
  };

    


    return this.http.post(url, { "user_id": user_id, "friend_id": friend_id },options);
  }
  sendMessage(user_id: any, friend_id: any, chat: any): Observable<any> {
    const url = baseUrl + `sendMessage`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });


     const options = {
    headers: headers,
  };



    return this.http.post(url, { "user_id": user_id, "friend_id": friend_id, "chat": chat },options);
  }


  startLiveChat(email: string, name: string): Observable<any> {
    const url = baseUrl + `startLiveChat`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });

 const options = {
    headers: headers,
  };

    


    return this.http.post(url, { "email": email, "name": name },options);
  }
  adminText(admin_text: string): Observable<any> {
    const url = baseUrl + `admin_text`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });


     const options = {
    headers: headers,
  };



    return this.http.post(url, { "admin_text": admin_text },options);
  }
  checkEmail(email: string): Observable<any> {
    const url = baseUrl + `checkEmail`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });

 const options = {
    headers: headers,
  };

    


    return this.http.post(url, { "email": email },options);
  }



  adminLogin(email: string, password: string): Observable<any> {
    const url = baseUrl + `auth/adminSignIn`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });


     const options = {
    headers: headers,
  };



    return this.http.post(url, { "email": email, "password": password },options);
  }





  getSignUpPackages(user_id: any): Observable<any> {
    const url = baseUrl + `getPackages`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });

 const options = {
    headers: headers,
  };

    


    return this.http.post(url, { "chat_id": user_id },options);
  }



  usage(): Observable<any> {
    const url = baseUrl + `Usage`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });


    
 const options = {
    headers: headers,
  };


    return this.http.post(url,{},options);
  }

  deleteUser(user_id: any): Observable<any> {
    const url = baseUrl + `deleteUser`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });
 const options = {
    headers: headers,
  };


    


    return this.http.post(url, { "user_id": user_id },options);
  }

  getCustomContact(user_id: any): Observable<any> {
    const url = baseUrl + `getCustomContact`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });


    
 const options = {
    headers: headers,
  };


    return this.http.post(url, { "user_id": user_id },options);
  }
  getContact(user_id: any): Observable<any> {
    const url = baseUrl + `myContacts`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });

 const options = {
    headers: headers,
  };

    


    return this.http.post(url, { "user_id": user_id },options);
  }


  deleteCustomContact(user_id: any, card_id: any): Observable<any> {
    const url = baseUrl + `deleteCustomContact`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });


     const options = {
    headers: headers,
  };



    return this.http.post(url, { "user_id": user_id, "card_id": card_id },options);
  }
  searchUser(user_id: any, query: any): Observable<any> {
    const url = baseUrl + `searchUser`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });


    
 const options = {
    headers: headers,
  };


    return this.http.post(url, { "user_id": user_id, "query": query }, options);
  }



  deletePackage(id: any): Observable<any> {
    const url = baseUrl + `deletePackage`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });


     const options = {
    headers: headers,
  };



    return this.http.post(url, { "id": id },options);
  }



  deleteAgent(agent_id: any): Observable<any> {
    const url = baseUrl + `deleteSupportAgent`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });


     const options = {
    headers: headers,
  };



    return this.http.post(url, { "id": agent_id },options);
  }

  searchCard(payload:any): Observable<any> {
    const url = baseUrl + `get-search-card-by-dropdown-religion`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });



    

    return this.http.post(url, payload);


  }


  searchCardNetwork(payload:any): Observable<any> {
    const url = baseUrl + `get-search-card-by-dropdown-network`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });

 const options = {
    headers: headers,
  };


    

    return this.http.post(url,  payload,options );


  }
  saveContact(contact: any): Observable<any> {
    const url = baseUrl + `saveCustomContact`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });


 const options = {
    headers: headers,
  };

    

    return this.http.post(url, contact,options);


  }
  updateContact(contact: any): Observable<any> {
    const url = baseUrl + `updateCustomContact`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });


 const options = {
    headers: headers,
  };

    

    return this.http.post(url, contact,options);


  }





  saveChat(chat_id: any, chat: any, message_type: any, responded_by_id: any): Observable<any> {
    const url = baseUrl + `saveLiveChat`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });
 const options = {
    headers: headers,
  };


    


    return this.http.post(url, { "chat_id": chat_id, "chat": chat, "message_type": message_type, "respond_by_id": responded_by_id },options);

  }

  emailChat(chat_id: any): Observable<any> {
    const url = baseUrl + `emailChats`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });


    const options = {
    headers: headers,
  };


    return this.http.post(url, { "chat_id": chat_id },options);

  }
  closeChat(chat_id: any): Observable<any> {
    const url = baseUrl + `closeChat`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });


    
const options = {
    headers: headers,
  };

    return this.http.post(url, { "chat_id": chat_id },options);

  }



  publicLogin(email: any, package_id: any, password: any,): Observable<any> {
    const url = baseUrl + `auth/login`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });


    const options = {
    headers: headers,
  };


    return this.http.post(url, { "email": email, "package_id": package_id, "password": password, },options);


  }

  getPositionType(category_id: any): Observable<any> {
    const url = baseUrl + `subcategory-position`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });

const options = {
    headers: headers,
  };

    

    return this.http.post(url, { "category_id": category_id },options);


  }
  getBusinessType(): Observable<any> {
    const url = baseUrl + `all-categories`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });



    const options = {
    headers: headers,
  };

    return this.http.post(url, {},options);


  }
  getSportType(): Observable<any> {
    const url = baseUrl + `main-category-sport-type`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });



    const options = {
    headers: headers,
  };

    return this.http.post(url, {},options);


  }
  getAgeType(): Observable<any> {
    const url = baseUrl + `subcategories-age-type`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });

const options = {
    headers: headers,
  };

    

    return this.http.post(url, {},options);


  }








  addAgent(name: any, email: any, password: any): Observable<any> {
    const url = baseUrl + `addSupportAgent`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });

const options = {
    headers: headers,
  };
    


    return this.http.post(url, { "name": name, "email": email, "password": password },options);

  }

  addPackage(id: any, description: any, expire_in: any, image: any, limit: any, logo: any, net_price: any, price: any, product_image: any, social_media_listing: any, umyoutube: any, vimeo: any, videos: any, website: any): Observable<any> {
    const url = baseUrl + `createPackage`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });

const options = {
    headers: headers,
  };
    


    return this.http.post(url, { "id": id, "description": description, "expire_in": expire_in, "image": image, "limit": limit, "logo": logo, "net_price": net_price, "price": price, "product_image": product_image, "social_media_listing": social_media_listing, "umyotube": umyoutube, "vimeo": vimeo, "videos": videos, "website": website },options);

  }
  updateAgent(name: any, email: any, id: any): Observable<any> {
    const url = baseUrl + `updateSupportAgent`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });

const options = {
    headers: headers,
  };
    


    return this.http.post(url, { "name": name, "email": email, "id": id },options);

  }
  getPackageById(id: any): Observable<any> {
    const url = baseUrl + `getPackageSingle`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });


    const options = {
    headers: headers,
  };


    return this.http.post(url, { "id": id },options);

  }

  updatePackage(id: any, description: any, expire_in: any, image: any, limit: any, logo: any, net_price: any, price: any, product_image: any, social_media_listing: any, umyoutube: any, vimeo: any, videos: any, website: any): Observable<any> {
    const url = baseUrl + `updatePackage`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });


    
const options = {
    headers: headers,
  };

    return this.http.post(url, { "id": id, "description": description, "expire_in": expire_in, "image": image, "limit": limit, "logo": logo, "net_price": net_price, "price": price, "product_image": product_image, "social_media_listing": social_media_listing, "umyotube": umyoutube, "vimeo": vimeo, "videos": videos, "website": website },options);

  }


 saveCard(formData: any): Observable<any> {
  const url = baseUrl + `saveCard`;
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your-auth-token',
  });

  const options = {
    headers: headers,
  };

  return this.http.post(url, formData, options);
}




  updateCard(formData: any): Observable<any> {
    const url = baseUrl + `updateCard`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });
const options = {
    headers: headers,
  };

    


    return this.http.post(url, formData,options);
  }


  getCards(payload: any): Observable<any> {
    const url = baseUrl + `getCard`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });
const options = {
    headers: headers,
  };

    


    return this.http.post(url, payload,options);
  }
  cancelStripeSubscription(payload: any): Observable<any> {
    const url = baseUrl + `cancel-subscription`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });


    
const options = {
    headers: headers,
  };

    return this.http.post(url, payload,options);
  }
  updateSubscriptionId(payload: any): Observable<any> {
    const url = baseUrl + `update-subscription-id`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });

const options = {
    headers: headers,
  };
    


    return this.http.post(url, payload,options);
  }
  updateUserPackage(payload: any): Observable<any> {
    const url = baseUrl + `updateUserPackage`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });

const options = {
    headers: headers,
  };
    


    return this.http.post(url, payload,options);
  }
  deleteCard(payload: any): Observable<any> {
    const url = baseUrl + `deleteCard`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });


    const options = {
    headers: headers,
  };


    return this.http.post(url, payload,options);
  }
  getSingleCard(payload: any): Observable<any> {
    const url = baseUrl + `getSingleCard`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });
 const options = {
    headers: headers,
  };


    


    return this.http.post(url, payload,options);
  }


  getChatUsers(): Observable<any> {
    const url = baseUrl + `getOpenChatAdmin`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-auth-token',
    });


     const options = {
    headers: headers,
  };



    return this.http.post(url,options);
  }







  getCountries(): Observable<any[]> {
    return this.http.get<any[]>('https://restcountries.com/v3.1/all');
  }

  getFullCountryName(shortName: string, countries: any[]): string {
    const country = countries.find((c) => c.alpha2Code === shortName);
    return country ? country.name : shortName;
  }



  AddCustomer(Customer: any) {
    return this.http.post(baseUrl + "add-customer", Customer)
  }

  AddProductPriceSubscription(subscription: any) {
    return this.http.post(baseUrl + "add-product-price-subscription", subscription)
  }

  registerUser(userData: any) {
    return this.http.post(baseUrl + "auth/register", userData)
  }

  verifyEmailCode(data: any) {
    return this.http.post(baseUrl + "verify_code", data)
  }



  changeStatus(id: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      
    });
  
    return this.http.post(baseUrl + `changeStatus`, {id:id}, { headers });
  }
  
  getUserReferals(userId:any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      
    });
  
    return this.http.post(baseUrl + `listOfReferals`, {"user_id":userId}, { headers });
  }
  


}


