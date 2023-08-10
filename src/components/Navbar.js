import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {LeetCodeIcon, TwitterIcon,GithubIcon,LinkedInIcon } from "./icons";
import { motion } from "framer-motion";
const CustomLink = ({ href, title, className = "" }) => {

 
  

  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] bg-dark inline-block absolute left-0 
        -bottom-0.5 group-hover:w-full transition-[width] 
        easy duration-300 ${
    router.asPath == href ? "w-full" : "w-0"
  }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav >
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/About" title={"About"} className="mx-4" />
        <CustomLink href="/projects" title={"Projects"} className="mx-4" />
        <CustomLink href="/articles" title={"Article"} className="ml-4" />
      </nav>

      <nav className="flex justify-center items-center flex-wrap-reverse">
        <motion.a href="https://" target={"_blank"}
        whileHover={{y:-3}}
        className="w-6 mx-3"
        >
          <TwitterIcon/>
        </motion.a>
        <motion.a href="https://" target={"_blank"}
        whileHover={{y:-3}}
        className="w-6 mx-3">
          <GithubIcon/>
        </motion.a>
        <motion.a href="https://" target={"_blank"}
        whileHover={{y:-3}}
        className="w-6 mx-3">
        <LinkedInIcon/>
        </motion.a>
        <motion.a href="https://" target={"_blank"}
        whileHover={{y:-3}}
        className="w-6 mx-3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="leetcode"><path fill="#B3B1B0" d="M22 14.355c0-.742-.564-1.346-1.26-1.346H10.676c-.696 0-1.26.604-1.26 1.346s.563 1.346 1.26 1.346H20.74c.696.001 1.26-.603 1.26-1.346z"></path><path fill="#E7A41F" d="m3.482 18.187 4.313 4.361c.973.979 2.318 1.452 3.803 1.452 1.485 0 2.83-.512 3.805-1.494l2.588-2.637c.51-.514.492-1.365-.039-1.9-.531-.535-1.375-.553-1.884-.039l-2.676 2.607c-.462.467-1.102.662-1.809.662s-1.346-.195-1.81-.662l-4.298-4.363c-.463-.467-.696-1.15-.696-1.863 0-.713.233-1.357.696-1.824l4.285-4.38c.463-.467 1.116-.645 1.822-.645s1.346.195 1.809.662l2.676 2.606c.51.515 1.354.497 1.885-.038.531-.536.549-1.387.039-1.901l-2.588-2.636a4.994 4.994 0 0 0-2.392-1.33l-.034-.007 2.447-2.503c.512-.514.494-1.366-.037-1.901-.531-.535-1.376-.552-1.887-.038l-10.018 10.1C2.509 11.458 2 12.813 2 14.311c0 1.498.509 2.896 1.482 3.876z"></path><path fill="#070706" d="M8.115 22.814a2.109 2.109 0 0 1-.474-.361c-1.327-1.333-2.66-2.66-3.984-3.997-1.989-2.008-2.302-4.937-.786-7.32a6 6 0 0 1 .839-1.004L13.333.489c.625-.626 1.498-.652 2.079-.067.56.563.527 1.455-.078 2.066-.769.776-1.539 1.55-2.309 2.325-.041.122-.14.2-.225.287-.863.876-1.75 1.729-2.601 2.618-.111.116-.262.186-.372.305-1.423 1.423-2.863 2.83-4.266 4.272-1.135 1.167-1.097 2.938.068 4.127 1.308 1.336 2.639 2.65 3.961 3.974.067.067.136.132.204.198.468.303.474 1.25.183 1.671-.321.465-.74.75-1.333.728-.199-.006-.363-.086-.529-.179z"></path></svg>
        </motion.a>
        <motion.a href="https://" target={"_blank"}
        whileHover={{y:-3}}
        className="w-6 ml-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="hackerrank"><path fill="#2FC363" d="M11.999 0C10.626 0 2.195 4.818 1.513 6c-.682 1.182-.686 10.819 0 12 .686 1.181 9.115 6 10.486 6 1.371 0 9.8-4.824 10.487-6 .686-1.176.686-10.83 0-12-.687-1.17-9.115-6-10.487-6zm2.841 19.415v.002c-.188 0-1.939-1.677-1.8-1.814.041-.041.296-.069.832-.086 0-1.23.028-3.215.045-4.046.002-.095-.021-.161-.021-.274h-3.787c0 .333-.022 1.697.065 3.416.011.213-.075.279-.272.278-.48-.001-.96-.005-1.44-.004-.194 0-.278-.072-.272-.286.043-1.567.14-3.938-.007-9.969v-.149c-.46-.016-.778-.045-.82-.086C7.225 6.26 9 4.583 9.187 4.583c.187 0 1.951 1.677 1.813 1.814-.041.041-.374.07-.795.086v.148c-.114 1.207-.096 3.731-.124 4.94h3.803c0-.213.018-1.628-.057-3.921-.005-.159.046-.242.199-.244.525-.004 1.049-.006 1.575-.003.164.001.216.081.213.252-.173 8.967-.031 8.341-.031 9.86.42.016.797.045.838.086.136.136-1.593 1.814-1.781 1.814z"></path></svg>
     
       </motion.a>
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[50%]">
        <Logo />
      </div>
    </header>
  );
};


export default Navbar;
