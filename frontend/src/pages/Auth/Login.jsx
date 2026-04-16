import Button from "../../components/ui/Button";
import AuthLayout from "../../layouts/AuthLayout";
import LabelInput from "../../components/ui/Label_input";
import { useState } from "react";
import { login } from "../../services/authService";
import { useNavigate, Link } from "react-router-dom";


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();

        try{
            const data = await login({email, password});

            localStorage.setItem("token", data.token);

            localStorage.setItem("user", JSON.stringify(data.user));

            if(data.user.role == "ADMIN"){
              navigate("/admin");
            } else {
              navigate("/home");
            }
    
        } catch (error) {
        console.error(error);
        alert("Erro ao fazer login!");
    }
    } 

  return (
    <AuthLayout>
      <div className="h-[80vh] w-[70vw] flex max-xl:h-screen max-xl:w-screen">
        
        {/* LADO ESQUERDO (IMAGEM) */}
        <div className="hidden lg:flex lg:w-1/2 relative">
          <img
            src="../src/images/ovelha.jpg"// coloca sua imagem aqui
            alt="background"
            className="w-full h-full object-fit-cover"
          />

          {/* overlay escuro */}
          <div className="absolute inset-0 bg-black/40 p-10 flex flex-col justify-between text-white">
            
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-red-700 rounded-md"></div>
              <span className="font-semibold">App Delivery</span>
            </div>

            <div>
              <p className="text-lg leading-relaxed max-w-md">
                "Esta plataforma revolucionou a forma como nossa equipe gerencia projetos diários, aumentando a produtividade em níveis nunca vistos."
              </p>
              <p className="text-sm mt-4 text-gray-300">
                Sofia Almeida, Diretora de Operações
              </p>
            </div>
          </div>
        </div>

        {/* LADO DIREITO (FORMULÁRIO) */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-100">
          <div className="w-full max-w-md p-8">

            {/* HEADER */}
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold">Bem-vindo de volta</h2>
              <p className="text-gray-500 text-sm">
                Insira seus dados para acessar sua conta
              </p>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <LabelInput
                label="E-mail"
                id="login_email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
              />

              <div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-gray-700">
                    Senha
                  </span>
                  <a href="#" className="text-sm text-gray-900 font-semibold">
                    Esqueceu a senha?
                  </a>
                </div>

                <LabelInput
                  id="login_senha"
                  type="password"
                  placeholder="********"
                  value={password}
                  onChange={(e)=> setPassword(e.target.value)}
                />
              </div>

              <Button type="submit">Entrar</Button>
            </form>

            {/* DIVISOR */}
            <div className="flex items-center gap-3 my-6">
              <hr className="flex-1 border-gray-300" />
              <span className="text-xs text-gray-400 whitespace-nowrap">
                OU CONTINUE COM
              </span>
              <hr className="flex-1 border-gray-300" />
            </div>

            {/* SOCIAL */}
            <div className="flex flex-col gap-3">
              <button className="w-full border rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-50">
                GitHub
              </button>

              <button className="w-full border rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-50">
                Google
              </button>
            </div>

            {/* FOOTER */}
            <p className="text-center text-sm text-gray-500 mt-6">
              Não tem uma conta?{" "}
              <span className="font-semibold text-gray-700 cursor-pointer">
                <Link to="/register">Cadastre-se</Link>
              </span>
            </p>

          </div>
        </div>
      </div>
    </AuthLayout>
  );
}