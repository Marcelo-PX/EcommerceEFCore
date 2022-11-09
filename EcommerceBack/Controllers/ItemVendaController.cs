using System;
using System.Linq;
using EcommerceBack.Data;
using EcommerceBack.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/item")]
    public class ItemVendaController : ControllerBase
    {
        private readonly DataContext _context;
        public ItemVendaController(DataContext context) => _context = context;

        [HttpPost]
        [Route("cadastrar")]
        public IActionResult Create([FromBody] ItemVenda item)
        {
            if (String.IsNullOrEmpty(item.CarrinhoId))
            {
                item.CarrinhoId = Guid.NewGuid().ToString();
            }
            item.Produto = _context.Produtos.Find(item.ProdutoId);
            _context.ItensVenda.Add(item);
            _context.SaveChanges();
            
            return Created("", item);
        }

        [HttpGet]
        [Route("buscar/{cartid}")]
        public IActionResult GetByCartId([FromRoute] string cartId)
        {
            return Ok(_context.ItensVenda
                .Include(i => i.Produto.Categoria)
                .Where(i => i.CarrinhoId == cartId)
                .ToList());
        }
    }
}