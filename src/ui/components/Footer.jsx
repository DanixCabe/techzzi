import { BsGithub, BsLinkedin } from "react-icons/bs"

export const Footer = () => {
    return (
        <div className="block bg-gray-100 w-full border-t border-gray-300  dark:bg-slate-900 dark:border-slate-50/[0.16] pb-4">
            <div className="md:container 2xl:max-w-[1530px] 3xl:max-w-[1920px]  xs:mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex  items-center justify-center flex-col">
                    <div className="flex space-x-3 text-2xl">
                        <a href="https://github.com/DanixCabe" target="_blank">
                            <BsGithub className="mt-5 mb-4 text-slate-700 dark:text-white"/>
                        </a>
                        <a href="https://www.linkedin.com/in/daniel-thomas-gizzi-diaz/" target="_blank">
                            <BsLinkedin className="mt-5 mb-4 text-slate-700 dark:text-white"/>
                        </a>
                    </div>
                    <p className="text-slate-700 opacity-60 dark:text-white dark:opacity-40">&copy;2023 Daniel Gizzi | All Rights Reserved</p>
                </div>
            </div>
                     
              
        </div>

    )
}
