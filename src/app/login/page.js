import "../login/login.css";
export default async function Login() {
  return (
    <main className="">
      <section class="loginSection">
        <form class="formLogin">
          <h2>Login</h2>
          <input placeholder="Ingresa tu c.i" />
          <input placeholder="Ingresa tu contraseña" />
          <button>Iniciar Sesion</button>
        </form>
      </section>
    </main>
  );
}
