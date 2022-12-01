using System.Linq;
using EcommerceBack.Data;
using EcommerceBack.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ProdutoController
{
    [ApiController]
    [Route("api/produto")]
    public class ProdutoController : ControllerBase
    {
        private readonly DataContext _context;
        public ProdutoController(DataContext context) => _context = context;
        
        [HttpPost]
        [Route("cadastrar")]
        public IActionResult Create([FromBody] Produto produto)
        {
            // produto.Categoria = _context.Categorias.Find(produto.CategoriaId);
            _context.Produtos.Add(produto);
            _context.SaveChanges();
            
            return Created("", produto);
        }
        
        [HttpGet]
        [Route("listar")]
        public IActionResult List() => 
            // Ok(_context.Produtos.Include(p => p.Produtos).ToList());
            Ok(_context.Produtos.ToList());

        [HttpGet]
        [Route("buscar/{id}")]
        public IActionResult GetById([FromRoute] int id)
        {
            Produto produto = _context.Produtos.Find(id);
            if (produto == null)
            {
                return NotFound();
            }
            return Ok(produto);
        }

        [HttpDelete]
        [Route("deletar/{name}")]
        public IActionResult Delete([FromRoute] string name)
        {
            Produto produto = _context.Produtos.FirstOrDefault(produto => produto.Nome == name);

            if (produto == null)
            {
                return NotFound();
            }
            _context.Produtos.Remove(produto);
            _context.SaveChanges();
            return Ok(_context.Produtos.ToList());
        }

        [HttpPut]
        [Route("alterar")]
        public IActionResult Update([FromBody] Produto produto)
        {
            _context.Produtos.Update(produto);
            _context.SaveChanges();
            return Ok(produto);
        }
    }
}