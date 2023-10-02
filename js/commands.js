var linkedin = "https://www.linkedin.com/in/sumalya-chatterjee-676b31262/";
var github = "https://github.com/R3DHULK/";
var youtube = "https://youtube.com/@sumalya";
var instagram = "https://instagram.com/redhulk.in";
var email = 'mailto:officialredhulk@gmail.com';
var back = 'https://redhulk.in';
const empty = "&nbsp";

about = [
  "<br>",
  "Hi there, 👋🏽",
  `redhulk.in, a small starting to secure this big planet from getting hacked and from losing green.`,
  `In this rapidly growing tech market your business needs tech professionals to get more reaches on online. But every 39 seconds there is a cyber attack occurred. You may be wondered how to be survived without a cyber expert team. We provide the solution. We have an expert team to build your applications and websites in mordern way that will be close to impossible to be hacked. We have cyber security experts to secure your old systems. And we are 24/7 online to help you in any enquires. We also provides industry level courses so you will become one of us. Find our websites non-helpful? Don't worry we have another mission on saving earth. Try our online games to get rid of boredom and let the ad play in the background. We share 90% of our ad-revenue with "greenplanet" and "saveourearthfoundation" ngos.`,
  "<br>",
];

links = [
  // format as table to achieve responsive column layout
  `<table>
   <tr><td>linkedin</td><td><a href="${linkedin}" target="_blank">linkedin profile</a></td></tr>
   <tr><td>github</td><td><a href="${github}" target="_blank">github account</a></td></tr>
   <tr><td>youtube</td><td><a href="${youtube}" target="_blank">youtube channel</a></td></tr>
   <tr><td>instagram</td><td><a href="${instagram}" target="_blank">instagram account</a></td></tr>
   </table>`,
];

projects = [
  "<br>",
  "My Github Projects Are Commonly Getting Updates Day By Day.",
  "Here is a list of some GitHub repositories that I worked on:",
  "<br>",
  `<div id="repo-box"></div>`,
  repos,
];

help = [
  "<br>",
  'Use these commands to navigate my web-terminal:',
  // format as table to achieve responsive column layout
  `<table>
  <tr><td><span class="command">about</span></td><td>Who is R3DHULK?</td></tr>
  <tr><td><span class="command">links</span></td><td>Display my links</td></tr>
  <tr><td><span class="command">projects</span></td><td>View coding projects</td></tr>
  <tr><td><span class="command">history</span></td><td>View command history</td></tr>
  <tr><td><span class="command">help</span></td><td>You obviously already know what this does</td></tr>
  <tr><td><span class="command">email</span></td><td>Do not email me</td></tr>
  <tr><td><span class="command">clear</span></td><td>Clear terminal</td></tr>
  <tr><td><span class="command">banner</span></td><td>Display the banner</td></tr>
  <tr><td><span class="command">theme</span></td><td>Change the theme</td></tr>
  <tr><td><span class="command">back</span></td><td>Go Back To GUI Version Of My Website</td></tr>
  <tr><td><span class="command">[tab]</span></td><td>Trigger completion</td></tr>
  </table>`,
  "<br>",
  'Also try other commands that you know. I may have included some easter eggs 😆.',
  "<br>",
];

banner = [
  "<br>",
  "██████╗ ███████╗██████╗ ██╗  ██╗██╗   ██╗██╗     ██╗  ██╗   ██╗███╗   ██╗",
  "██╔══██╗██╔════╝██╔══██╗██║  ██║██║   ██║██║     ██║ ██╔╝   ██║████╗  ██║",
  "██████╔╝█████╗  ██║  ██║███████║██║   ██║██║     █████╔╝    ██║██╔██╗ ██║",
  "██╔══██╗██╔══╝  ██║  ██║██╔══██║██║   ██║██║     ██╔═██╗    ██║██║╚██╗██║",
  "██║  ██║███████╗██████╔╝██║  ██║╚██████╔╝███████╗██║  ██╗██╗██║██║ ╚████║",
  "╚═╝  ╚═╝╚══════╝╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝╚═╝╚═╝  ╚═══╝",
  "                                                                         ",                    
  "<br>",
];

welcomeMsg = [
  '<span class="color2 terminal-welcome-msg">Founder: Sumalya Chatterjee.</span>',
  "<span class=\"color2 terminal-welcome-msg\">Type </span> <span class=\"command terminal-welcome-msg\">'help'</span><span class=\"color2 terminal-welcome-msg\"> (and hit 'return') to see a list of available commands.</span>",
  "<br>",
];

allCommands = [
  "help", "about", "links", "projects", "email", "linkedin", "youtube", "github", "instagram", "history", "clear", "banner", "theme", "back",
  "echo", "ping", "ls", "cd", "vi", "vim", "emacs", "sudo", "whoami",
];

themes = {
  "coral": "css/style_coral.css",
  "midnight": "css/style_midnight.css",
  "chocolate": "css/style_chocolate.css",
};

allArgs = [
  "ls", "set", "random", ...themes,
];

