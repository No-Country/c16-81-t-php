import styles from "../../../style";

const SuspendProfile = () => {
  const { flexCenter } = styles;
  return (
    <div className={` max-h-[58vh] h-[58vh] overflow-y-auto w-full px-6 py-4 ${flexCenter} flex-col text-white gap-y-2 border-2 border-black rounded-lg`}>
      <h1 className="font-bold text-4xl">¡Cuidado arenero!</h1>
      <p className="m-4 w-3/4 text-2xl">
        Al suspender tu cuenta, no podras unirte y tampoco seras visible para
        que otros usuarios te inscriban a su torneo.
      </p>
      <p className="text-2xl font-bold">¿Estas seguro de suspender tu cuenta?</p>
      <form id="suspendProfileForm" className="w-full flex justify-around mt-8">
        <button
          type="submit"
          className=" bg-activePurple px-12 py-2 rounded-lg text-xl font-bold text-card"
        >
          Si, suspender
        </button>
        <button
          type="reset"
          className=" bg-ligthPurple px-12 py-2 rounded-lg text-xl font-bold text-card"
        >
          No, cancelar
        </button>
      </form>
    </div>
  );
};

export default SuspendProfile;
