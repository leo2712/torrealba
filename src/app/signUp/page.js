import "../signUp/signUp.css";
export default async function SignUp() {
  return (
    <main className="">
      <section class="signUpSection">
        <form class="formSignUp">
          <h2>SignUp</h2>
          <input placeholder="Ingresa tu nombre" />
          <input placeholder="Ingresa tu apellido" />
          <input placeholder="Ingresa tu correo" />
          <input placeholder="Ingresa tu c.i" />
          <input placeholder="Ingresa tu contraseña" />
          <input placeholder="confirma tu contraseña" />
          <button className="botondegay">Registrase</button>
        </form>
      </section>
    </main>
  );
}
