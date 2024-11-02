import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { PhoneIcon, MapIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
type Props = {};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:aungkyawhtwe.mdy49@gmail.com?subject=${formData.subject}&body=Hi, my name is  ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className="px-5 lg:px-10 py-10 4xl:py-20 mx-auto max-w-6xl transition-opacity">
      <h3 className="uppercase text-center tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="gap-5">
        <div className="text-start mt-10 px-5 mb-5">
          <h4 className="text-xl lg:text-3xl text-center font-semibold">
            Is there anything you need?{""}
            <span className=" ">
            {" "}
            Contact me
          </span>
          </h4>
          
          <div className="space-y-3 flex mt-5 flex-col items-start justify-center">
            <div className="flex items-center space-x-5 justify-center">
              <PhoneIcon className="text-dark h-7 w-7 animate-pulse" />
              <a
                href="tel:+959798802184"
                className="text-1xl">
                +959798802184
              </a>
            </div>
            <div className="flex items-center space-x-5 justify-center">
              <EnvelopeIcon className="text-dark h-7 w-7 animate-pulse" />
              <a
                href="mailto:aungkyawhtwe.mdy49@gmail.com"
                className="text-1xl">
                aungkyawhtwe.mdy49@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-5 justify-center">
              <MapIcon className="text-dark h-7 w-7 animate-pulse" />
              <p className="text-1xl">Mandalay, Myanmar</p>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2">
          <div className="flex space-x-2">
            <input
              {...register("name")}
              className="contactInput"
              placeholder="Name"
              required
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              required
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            className="contactInput"
            required
            placeholder="Subject"
            type="text"
          />
          <textarea
            {...register("message")}
            required
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-primary text-light py-5 px-10 rounded-md font-bold text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
