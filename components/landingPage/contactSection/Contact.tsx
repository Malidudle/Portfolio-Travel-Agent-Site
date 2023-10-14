import SubmitButton from "./SubmitButton";

const Contact = () => {
  return (
    <form className="lg:w-[610px] w-[200] h-[540px] rounded-2xl bg-[#333] p-8 flex flex-col gap-6 bg-gradient-radial from-[#3f3f3f] to-[#333]">
      <h2 className="text-2xl">Send Us a Message!</h2>
      <div className="flex flex-col gap-1">
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          id="Name"
          className="h-10 w-[70%] rounded text-black p-1"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="Email">Email</label>
        <input
          type="text"
          id="Email"
          className="h-10 w-[80%] rounded text-black p-1"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="Message">Message</label>
        <textarea
          id="Message"
          className="h-[100px] w-[100%] rounded text-black p-1"
        />
      </div>
      <div className="flex items-center justify-center">
        <SubmitButton />
      </div>
    </form>
  );
};

export default Contact;
