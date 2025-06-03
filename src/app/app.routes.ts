import { Routes } from '@angular/router';
import { EventDetailsComponent } from './page/event-details/event-details.component';

export const routes: Routes = [

    {path:'',loadComponent: () => import('./page/index/index.component').then(mod => mod.IndexComponent)},

    {path:'home',loadComponent: () => import('./page/index/index.component').then(mod => mod.IndexComponent)},
    {path:'about-us',loadComponent: () => import('./page/about/about.component').then(mod=>mod.AboutComponent)},
    {path:'our-project', loadComponent:()=>import('./page/our-projects/our-projects.component').then(res=>res.OurProjectsComponent)},
    {path:'project-details', loadComponent:()=>import('./page/our-projects-details/our-projects-details.component').then(res=>res.OurProjectsDetailsComponent)},
    {path:'ourTeam', loadComponent:()=>import('./page/our-team/our-team.component').then(res=>res.OurTeamComponent)},
    {path:'TeamMem', loadComponent:()=>import('./page/team-mem/team-mem.component').then(res=>res.TeamMemComponent)},
    {path:'faq', loadComponent:()=>import('./page/faq/faq.component').then(res=>res.FaqComponent)},
    {path:'donateCategory', loadComponent:()=>import('./page/donate-cat/donate-cat.component').then(res=>res.DonateCatComponent)},
    {path:'donate', loadComponent:()=>import('./page/donate/donate.component').then(res=>res.DonateComponent)},
    {path:'Event', loadComponent:()=>import('./page/event/event.component').then(res=>res.EventComponent)},
    {path:'event-detail', component:EventDetailsComponent},
    {path:'Blog', loadComponent:()=>import('./page/blog/blog.component').then(res=>res.BlogComponent)},
    {path:'BlogDetails', loadComponent:()=>import('./page/blog-details/blog-details.component').then(res=>res.BlogDetailsComponent)},
    {path:'Contact', loadComponent:()=>import('./page/contact/contact.component').then(res=>res.ContactComponent)},
    {path:'term&Conditions', loadComponent:()=>import('./page/term-condi/term-condi.component').then(res=>res.TermCondiComponent)},
    {path:'ourPolicy', loadComponent:()=>import('./page/privacy-policy/privacy-policy.component').then(res=>res.PrivacyPolicyComponent)},
    {path:'**', loadComponent:()=>import('./page/error/error.component').then(mod=>mod.ErrorComponent)},

    // UserAuth
    // SignIn, SignUp, ForgetPwd with user Auth.
    {path:'signin', loadComponent:()=>import('./auth/user-sign-in/user-sign-in.component').then(res=>res.UserSignInComponent)},
    {path:'signup', loadComponent:()=>import('./auth/user-signup/user-signup.component').then(res=>res.UserSignupComponent)},
    {path:'forget-password', loadComponent:()=>import('./auth/user-forget/user-forget.component').then(res=>res.UserForgetComponent)},
    {path:'Admin', loadComponent:()=>import('./auth/admin-login/admin-login.component').then(res=>res.AdminLoginComponent)},
];
