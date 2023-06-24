using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace Validador_CPF
{
    static class Validador
    {
        public static void Valida(string cpf)
        {
            string _cpf = cpf.Trim(new char[] { ' ', '.', '-' });
            int primeiro_digito = Calcula_Primeiro_Digito(_cpf);
            int segundo_digito = Calcula_Segundo_Digito(_cpf, primeiro_digito);

            if (char.GetNumericValue(_cpf[9]) == primeiro_digito && char.GetNumericValue(_cpf[10]) == segundo_digito)
            {
                Console.WriteLine("CPF Válido!");
            } else
            {
                Console.WriteLine("CPF Inválido!");
            }

        }

        private static int Calcula_Primeiro_Digito(string cpf)
        {
            int total = 0;

            for (int i = 0; i < 9; i++)
            {
                int aux = (int)char.GetNumericValue(cpf[i]);
                total += aux * (10 - i);
            }

            if(total % 11 == 0 || total % 11 == 1) 
            {
                return 0;
            }           

            return 11 - total % 11;
        }

        private static int Calcula_Segundo_Digito(string cpf, int digito)
        {
            int total = 0;

            for (int i = 0; i < 10; i++)
            {
                int aux = 0;
                if(i == 0)
                {
                    continue;
                }
                if(i == 9)
                {
                    aux = digito;   
                } else
                {
                    aux = (int)char.GetNumericValue(cpf[i]);
                }
                total += aux * (10 - i+1);
            }

            if (total % 11 == 0 || total % 11 == 1)
            {
                return 0;
            }
            return 11 - total % 11;
        }
    }
}
