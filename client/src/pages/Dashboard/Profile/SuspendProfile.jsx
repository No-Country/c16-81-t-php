import styles from "../../../style";

const SuspendProfile = () => {
  const { flexCenter } = styles;
  return (
    <div className={` min-h-[58vh]  w-full px-6 py-4 flex justify-center items-center flex-col text-white gap-y-6 sm:gap-y-2 border-2 border-white/30  rounded-lg`}>
      <h1 className="font-monse font-bold text-[16px] sm:text-4xl">¡Cuidado arenero!</h1>
      <p className="sm:m-4 sm:w-3/4 font-monse text-center text-paragraph text-sm sm:text-2xl text-pretty">
        Al suspender tu cuenta, no podras unirte y tampoco seras visible para
        que otros usuarios te inscriban a su torneo.
      </p>
      <p className="font-monse text-center text-pretty sm:text-2xl font-bold">¿Estas seguro de suspender tu cuenta?</p>
      <form id="suspendProfileForm" className="w-full flex flex-col items-center justify-center sm:flex-row sm:justify-around">
        <button type='submit'           
                  className={`py-2 sm:py-4 px-6 mt-4 max-w-48 items-center justify-center bg-gray-gradient flex-1 flex gap-2 flex-row font-monse font-medium text-[14px] sm:text-[16px]
                  text-[#18C935] hover:text-green-500 outline-none rounded-[14px] shadow-2xl`}> 
              Si, suspender
        </button>

        <button type='reset'           
                  className={`py-2 sm:py-4 px-6 mt-4 max-w-48 items-center justify-center bg-gray-gradient flex-1 flex gap-2 flex-row font-monse font-medium text-[14px] sm:text-[16px]
                  text-[#FF5F5F] hover:text-red-500 outline-none rounded-[14px] shadow-2xl`}> 
              No, cancelar
        </button>
      </form>
    </div>
  );
};

export default SuspendProfile;
