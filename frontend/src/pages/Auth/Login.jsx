import Input from "../../components/ui/Label_input";
import Button from "../../components/ui/Button";
import AuthLayout from "../../layouts/AuthLayout";
import LabelInput from "../../components/ui/Label_input";

export default function Login() {
    return (
        <AuthLayout>
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
                <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

                <form className="flex flex-col gap-4">

                    <LabelInput
                        label="Email"
                        id="login_email"
                        type="email"
                        placeholder="Digite seu email"
                    />

                    <LabelInput
                        label="Senha"
                        id="login_senha"
                        type="password"
                        placeholder="Digite sua senha"
                    />

                    <Button>Entrar</Button>
                </form>
            </div>
        </AuthLayout>
    );
}