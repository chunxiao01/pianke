import{q as u,b as l,y as d,j as f,r as n}from"./index.f6f73b00.js";import{r as b,b as g,u as h,g as k,c as w}from"./momentdata.bc4584bc.js";function S(e){let a="#3178c6";switch(e){case"JavaScript":a="#f1e05a";break;case"TypeScript":a="#3178c6";break;case"Vue":a="#41b883";break;case"CSS":a="#563d7c";break;case"PowerShell":a="#012456";break;case"Python":a="#3572A5";break;case"C++":a="#f34b7d";break;case"Java":a="#b07219";break;case"Go":a="#00ADD8";break;case"C":a="#555555";break;case"C#":a="#178600";break;case"Ruby":a="#701516";break;case"HTML":a="#e34c26";break;case"Stylus":a="#ff6347";break;case"PHP":a="#4F5D95";break;case"Swift":a="#F05138";break;case"Objective-C":a="#438eff";break;case"Shell":a="#89e051";break;case"Kotlin":a="#A97BFF";break;case"Jupyter Notebook":a="#DA5B0B";break;case"Scala":a="#c22d40";break;case"Rust":a="#dea584";break;case"R":a="#198CE7";break;case"MATLAB":a="#e16737";break;case"Lua":a="#000080";break;case"Dart":a="#00B4AB";break;case"F#":a="#b845fc";break;case"JSON":a="#292929";break;case"SCSS":a="#c6538c";break;case"Visual Basic .NET":a="#945db7";break;case"VBA":a="#867db1";break;case"Perl":a="#0298c3";break;case"YAML":a="#cb171e";break;case"PLSQL":a="#dad8d8";break;case"Vim Script":a="#199f4b";break;default:a="#3178c6";break}return a}function v(e){return e?"Private":"Public"}const m=u();function y(){return b({url:`https://api.github.com/users/${m.useconfig.owner}`,method:"get"})}function A(){return b({url:`https://api.github.com/users/${m.useconfig.owner}/repos`,method:"get",params:{type:"owner",sort:"pushed"}})}const P=u(),{moment_theme:p,moment_name:B,repo:C,nickname:D,show_friend:c,friends_name:L,mainfest:R}=l(P.useconfig),T=g(),{author_id:x,author_name:z,author_nickname:E,author_motto:F,author_avatar_url:G,author_url:K,author_repo:I,author_website_url:q,friends_id:J}=l(T.useauthor),M=h(),{moments_total_num:V}=l(M),Q=d("profile",()=>{const e=f({moment_theme:p,profile_id:null,profile_name:"",profile_github_name:"",profile_nickname:E,profile_motto:F,profile_avatar_url:"",profile_url:"",profile_created_at:"",profile_created_at_days:0,profile_location:"",profile_hireable:"",profile_bio:"",profile_company:"",profile_blog:"",profile_email:"",profile_twitter:"",profile_wechat:"",profile_qq:"",profile_weibo:"",profile_bilibili:"",profile_tiktok:"",profile_all_repos_num:0,profile_followers_num:0,profile_following_num:0,profile_repo:I,profile_website_url:q,moments_num:0,friends_num:J.value.length}),a=f({profile_id:e.profile_id,profile_name:e.profile_name,profile_github_name:e.profile_github_name,profile_motto:e.profile_motto,profile_avatar_url:e.profile_avatar_url,profile_url:e.profile_url,profile_created_at:e.profile_created_at,profile_created_at_days:e.profile_created_at_days,profile_location:e.profile_location,profile_bio:e.profile_bio,blog_name:B,blog_url:e.profile_website_url,blog_github_repo:e.profile_repo,blog_github_name:C,blog_nickname:D,blog_theme:p,blog_content:c===!0?"\u6240\u6709":"\u53EA\u770B\u6211\u7684",blog_friends:c===!0?L.value.join(","):"",blog_kaipin:R.value.kaipin}),_=n([]),t=n(!1);return{useprofile:e,useprofileedit:a,useprofilerepos:_,isLoaded:t,changeProfileTheme:()=>{e.moment_theme==="light"?(e.moment_theme="dark",document.documentElement.setAttribute("data-theme","dark")):(e.moment_theme="light",document.documentElement.removeAttribute("data-theme"))},getBaseInfo:async()=>{try{const r=await y(),i=V.value;r.data&&r.data.id&&(e.profile_id=r.data.id,e.profile_name=r.data.login,e.profile_github_name=r.data.name||e.author_name,e.profile_created_at=k(r.data.created_at,2),e.profile_created_at_days=parseInt(w(new Date,r.data.created_at)),e.profile_avatar_url=r.data.avatar_url,e.profile_url=r.data.html_url,e.profile_location=r.data.location,e.profile_hireable=r.data.hireable,e.profile_bio=r.data.bio,e.profile_company=r.data.company,e.profile_blog=r.data.blog,e.profile_email=r.data.email,e.profile_twitter=r.data.twitter_username,e.profile_all_repos_num=r.data.public_repos,e.profile_followers_num=r.data.followers,e.profile_following_num=r.data.following,e.moments_num=i,a.profile_id=e.profile_id,a.profile_name=e.profile_name,a.profile_github_name=e.profile_github_name,a.profile_motto=e.profile_motto,a.profile_avatar_url=e.profile_avatar_url,a.profile_url=e.profile_url,a.profile_created_at=e.profile_created_at,a.profile_created_at_days=e.profile_created_at_days,a.profile_location=e.profile_location,a.profile_bio=e.profile_bio,a.blog_url=e.profile_website_url,a.blog_github_repo=e.profile_repo),t.value||(t.value=!0)}catch(r){console.log(r)}},getReposInfo:async()=>{try{const r=await A();if(r.data){const i=r.data.filter(o=>o.fork===!1),s=[];i.forEach(o=>{s.push({repo_id:o.id,repo_name:o.name,repo_url:o.html_url,repo_ispublic:!0,repo_desc:o.description,repo_lang:o.language,repo_lang_color:S(o.language),repo_ispublic:v(o.private),repo_star:o.stargazers_count,repo_fork:o.forks})}),_.value=s}}catch(r){console.log(r)}}}},{persist:{paths:["useprofileedit","isLoaded"]}});export{Q as u};
