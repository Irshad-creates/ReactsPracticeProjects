import React from "react";
import Card from "./components/Card";

const App = () => {

  const jobOpenings = [
    {
      brandLogoImg:
      "https://imgs.search.brave.com/V7sgagRATLlWoAL9kKkWlvM1Lymxxb-2sk6dz3LnYrk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2MxL0dvb2dsZV8l/MjJHJTIyX2xvZ28u/c3Zn",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$55/hour",
      location: "Bangalore, India",
    },
    {
      brandLogoImg:
        "https://imgs.search.brave.com/AgIzAEXNPptCf7ZQviNhH8txyjoU1UpbiNVfQ7av458/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZWdp/c3RyeS5ucG1taXJy/b3IuY29tL0Bsb2Jl/aHViL2ljb25zLXN0/YXRpYy1wbmcvbGF0/ZXN0L2ZpbGVzL2Rh/cmsvbWV0YS1jb2xv/ci5wbmc",
      companyName: "Meta",
      datePosted: "2 weeks ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$60/hour",
      location: "Remote, India",
    },
    {
      brandLogoImg:
        "https://imgs.search.brave.com/WQvc4jTO3TIGaEo10R0lBNwpEbBlEvNWXKf4ZdFT4Tk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS8x/MjgvMTQ3NzYvMTQ3/NzY2MzkucG5n",
      companyName: "Apple",
      datePosted: "1 week ago",
      post: "UI Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$75/hour",
      location: "Hyderabad, India",
    },
    {
      brandLogoImg:
        "https://imgs.search.brave.com/98dRkyZ1zeADFpvad5k21xmSSuHXk_AS3K8aLxVI7Cw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC8z/OS84Ny9hbWF6b24t/aWNvbi1ibGFjay1h/bmQtd2hpdGUtdmVj/dG9yLTM0MjQzOTg3/LmpwZw",
      companyName: "Amazon",
      datePosted: "3 days ago",
      post: "Web Development Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$50/hour",
      location: "Mumbai, India",
    },
    {
      brandLogoImg: "https://imgs.search.brave.com/CcLyXd4z-23DN1Lt0Tb8jmMM8DtbJz1VX3j8DhkP_wg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9uZXRm/bGl4LWxvZ28td2hp/dGUtYmFja2dyb3Vu/ZC1ncmFwaGljLXRl/bXBsYXRlLXZlY3Rv/ci1pbGx1c3RyYXRp/b24tMjE2MTM1NDA2/LmpwZw",
      companyName: "Netflix",
      datePosted: "10 days ago",
      post: "Frontend UI Developer",
      tag1: "Contract",
      tag2: "Senior Level",
      pay: "$85/hour",
      location: "Remote",
    },
    {
      brandLogoImg:
        "https://imgs.search.brave.com/urbdhQtWWYMqIz-xaeeL5tWbucWrpPsbuFwD0xEJmLk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L21pY3Jvc29mdC1s/b2dvLXNtYWxsLTI5/LnBuZw",
      companyName: "Microsoft",
      datePosted: "4 weeks ago",
      post: "Software Engineer (Web)",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$65/hour",
      location: "Pune, India",
    },
    {
      brandLogoImg:
        "https://imgs.search.brave.com/szCkFCBXl8EaFF2KVFqMxd-vp5K1X_TOZGBIjgA_WXo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjAv/MzM2LzQ4NC9zbWFs/bC90ZXNsYS1sb2dv/LXRlc2xhLWljb24t/dHJhbnNwYXJlbnQt/cG5nLWZyZWUtdmVj/dG9yLmpwZw",
      companyName: "Tesla",
      datePosted: "2 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$80/hour",
      location: "Remote",
    },
    {
      brandLogoImg:
        "https://imgs.search.brave.com/rrHM5P7rW4htqrOYc9QfczCbTnFGskj-ar_60ae4OdY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWxpbmtlZGluLWxv/Z28taWNvbi1zdmct/ZG93bmxvYWQtcG5n/LTQ5ODQxOC5wbmc_/Zj13ZWJwJnc9MTI4",
      companyName: "LinkedIn",
      datePosted: "6 days ago",
      post: "UI Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Bangalore, India",
    },
  ];

  
  return (
    <div id="parent">
      {
        jobOpenings.map(function(elem,idx){

          return <div key={idx}>
            <Card company={elem.companyName} brandlogo={elem.brandLogoImg} datePosted={elem.datePosted} post={elem.post}
            tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
          </div>
          
        })
      }
    </div>
  );
};
export default App;
