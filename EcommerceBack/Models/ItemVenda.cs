using System;

namespace EcommerceBack.Models
{
    public class ItemVenda
    {
        public ItemVenda() => CriadoEm = DateTime.Now;
        public int ItemVendaId { get; set; }
        public string CarrinhoId { get; set; }
        public Produto Produto { get; set; }
        public int ProdutoId { get; set; }
        public int Quantidade { get; set; }
        public double Valor { get; set; }
        public DateTime CriadoEm { get; set; }
        
    }
}