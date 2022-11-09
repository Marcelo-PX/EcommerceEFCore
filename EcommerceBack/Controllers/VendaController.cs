using System.Collections.Generic;
using System.Linq;
using EcommerceBack.Data;
using EcommerceBack.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/venda")]
    public class VendaController : ControllerBase
    {
        private readonly DataContext _context;
        public VendaController(DataContext context) => _context = context;
         
        [HttpGet]
        [Route("listar")]
        public IActionResult List()
        {
            return Ok(_context.Vendas
                .Include(x => x.FormaPagamento)
                .Include(x => x.Itens)
                .ThenInclude(x => x.Produto)
                .ThenInclude(x => x.Categoria)
                .AsNoTracking().ToList());
        }

        [HttpPost]
        [Route("cadastrar")]
        public IActionResult Create([FromBody] Venda venda)
        {
            venda.FormaPagamento = _context.FormasPagamento.Find(venda.FormaPagamentoId);
            List<ItemVenda> itens = new List<ItemVenda>();
            foreach(ItemVenda itemVenda in venda.Itens){
               itens.Add(_context.ItensVenda.Find(itemVenda.ItemVendaId));
            }
            venda.Itens = itens;
            _context.Vendas.Add(venda);
            _context.SaveChanges();
            return Created("", venda);
        }
    }
}