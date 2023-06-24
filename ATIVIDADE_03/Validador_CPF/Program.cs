namespace Validador_CPF
{
    internal class Program
    {
        static void Main(string[] args)
        {
            do
            {
                Console.Write("CPF: ");
                Validador.Valida(Console.ReadLine());
            }while (true);
        }
    }
}