using System;

namespace EcommerceBack.Models
{
    public class FormaPagamento
    {
        public FormaPagamento() => CriadoEm = DateTime.Now;
        public int FormaPagamentoId { get; set; }
        public string Nome { get; set; }
        public int Parcelas { get; set; }
        public DateTime CriadoEm { get; set; }
        
    }
}