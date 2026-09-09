function mascara_telefone ()
        {
           //limitador
         var tel = document.getElementById("telefone").value
          tel=tel.slice(0,16) //(pode limitar a quantidade de char na entrada pelo java script)
          document.getElementById("telefone").value=tel

            //máscara
            var tel_formatado = document.getElementById("telefone").value
            if (tel_formatado[0]!="(")
            {
                if(tel_formatado[0]!=undefined)
                {
                    document.getElementById("telefone").value="("+tel_formatado[0];
                }
            }

            if (tel_formatado[3]!=")")
            {
                if(tel_formatado[3]!=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,3)+")"+tel_formatado[3]
                }
            }

            if (tel_formatado[4]!=" ")
            {
                if(tel_formatado[4]!=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,4)+" "+tel_formatado[4]
                }
            }

            if (tel_formatado[6]!=" ")
            {
                if(tel_formatado[6]!=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,6)+" "+tel_formatado[6]
                }
            }

            if (tel_formatado[11]!="-")
            {
                if(tel_formatado[11]!=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,11)+"-"+tel_formatado[11]
                }
            }
        }


function mascara_cep()
        { var cep_formatado = document.getElementById("cep").value
            if (cep_formatado[2]!=".")
            {
                if (cep_formatado[2]!=undefined)
                {
                    document.getElementById("cep").value=cep_formatado.slice(0,2)+"."+cep_formatado[2];
                }
            }
        
            if (cep_formatado[6]!="-")
            {
                if(cep_formatado[6]!=undefined)
                {
                    document.getElementById("cep").value=cep_formatado.slice(0,6)+"-"+cep_formatado[6]
                }
            }

        }


function mascara_cpf ()
        {
           //limitador
         var cpf = document.getElementById("cpf").value
          cpf=cpf.slice(0,14)
          document.getElementById("cpf").value=cpf

            //máscara
            var cpf_formatado = document.getElementById("cpf").value
            if (cpf_formatado[3]!=".")
            {
                if(cpf_formatado[3]!=undefined)
                {
                    document.getElementById("cpf").value=cpf_formatado.slice(0,3)+"."+cpf_formatado[3]
                }
            }

            if (cpf_formatado[7]!=".")
            {
                if(cpf_formatado[7]!=undefined)
                {
                    document.getElementById("cpf").value=cpf_formatado.slice(0,7)+"."+cpf_formatado[7]
                }
            }

            if (cpf_formatado[11]!="-")
            {
                if(cpf_formatado[11]!=undefined)
                {
                    document.getElementById("cpf").value=cpf_formatado.slice(0,11)+"-"+cpf_formatado[11]
                }
            }
        }


function mascara_cnpj ()
        {
           //limitador
         var cnpj = document.getElementById("cnpj").value
          cnpj=cnpj.slice(0,18)
          document.getElementById("cnpj").value=cnpj

            //máscara
            var cnpj_formatado = document.getElementById("cnpj").value
            if (cnpj_formatado[2]!=".")
            {
                if(cnpj_formatado[2]!=undefined)
                {
                    document.getElementById("cnpj").value=cnpj_formatado.slice(0,2)+"."+cnpj_formatado[2]
                }
            }

            if (cnpj_formatado[6]!=".")
            {
                if(cnpj_formatado[6]!=undefined)
                {
                    document.getElementById("cnpj").value=cnpj_formatado.slice(0,6)+"."+cnpj_formatado[6]
                }
            }

            if (cnpj_formatado[10]!="/")
            {
                if(cnpj_formatado[10]!=undefined)
                {
                    document.getElementById("cnpj").value=cnpj_formatado.slice(0,10)+"/"+cnpj_formatado[10]
                }
            }

            if (cnpj_formatado[15]!="-")
            {
                if(cnpj_formatado[15]!=undefined)
                {
                    document.getElementById("cnpj").value=cnpj_formatado.slice(0,15)+"-"+cnpj_formatado[15]
                }
            }
        }


function mostrarConfirmacao ()
        {
            document.getElementById("mensagem").style.display="block"
            return false //impede a página de recarregar ao enviar o form
        }
