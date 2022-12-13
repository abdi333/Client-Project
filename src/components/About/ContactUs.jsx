import React from "react";
import { useState } from "react";

function ContactUs() {
  return (
    <div className=" mx-9 my-9 grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
      <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Very easy to join!
          </h3>
          <p className="my-4 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui tempore
            dignissimos ducimus in eligendi minima nihil, eius voluptate, eum
            quae ab, illum expedita accusantium nobis voluptas veritatis quod
            libero minus.
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
          <img
            className="rounded-full w-9 h-9"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
            alt="profile picture"
          ></img>
          <div className="space-y-0.5 font-medium dark:text-white text-left">
            <div>Bonnie Green</div>
            <div className="text-sm font-light text-gray-500 dark:text-gray-400">
              3 year member
            </div>
          </div>
        </figcaption>
      </figure>
      <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Magnificent selection of courses
          </h3>
          <p className="my-4 font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            nisi, porro sed officia necessitatibus officiis deleniti est
            accusantium temporibus placeat quae iste voluptas aut odio magni
            similique voluptatem. Modi, ratione!
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
          <img
            className="rounded-full w-9 h-9"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
            alt="profile picture"
          ></img>
          <div className="space-y-0.5 font-medium dark:text-white text-left">
            <div>Roberta Casas</div>
            <div className="text-sm font-light text-gray-500 dark:text-gray-400">
              6 year member
            </div>
          </div>
        </figcaption>
      </figure>
      <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Great sense of community
          </h3>
          <p className="my-4 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            pariatur esse ut vel incidunt harum facilis ad? Doloremque, dolorem
            culpa magni reiciendis ut ipsa alias debitis vitae! Iusto,
            perferendis perspiciatis.
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
          <img
            className="rounded-full w-9 h-9"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
            alt="profile picture"
          ></img>
          <div className="space-y-0.5 font-medium dark:text-white text-left">
            <div>Jese Leos</div>
            <div className="text-sm font-light text-gray-500 dark:text-gray-400">
              new member
            </div>
          </div>
        </figcaption>
      </figure>
      <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Love the apparel!
          </h3>
          <p className="my-4 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            consequatur eaque odit repudiandae, sapiente placeat velit enim
            accusamus? Incidunt corporis enim recusandae sapiente nostrum hic
            quisquam obcaecati ratione numquam officiis.
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
          <img
            className="rounded-full w-9 h-9"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
            alt="profile picture"
          ></img>
          <div className="space-y-0.5 font-medium dark:text-white text-left">
            <div>Joseph McFall</div>
            <div className="text-sm font-light text-gray-500 dark:text-gray-400">
              2 year member
            </div>
          </div>
        </figcaption>
      </figure>
      <div className="flex  mt-3 h-80">
        <img
          src="https://app.perfectgolfevent.com/site-images/17678_1635110375.png"
          alt=""
        />
        <img
          src="https://app.perfectgolfevent.com/site-images/16642_1624937513.png"
          alt=""
        />
        <img
          src="https://app.perfectgolfevent.com/site-images/17678_1635110003.png"
          alt=""
        />
        <img
          src="https://app.perfectgolfevent.com/site-images/17678_1635109433.png"
          alt=""
        />
        <img
          src="https://app.perfectgolfevent.com/site-images/17678_1635108528.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default ContactUs;