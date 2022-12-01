using System.Linq;
using EcommerceBack.Data;
using EcommerceBack.Models;
using Microsoft.AspNetCore.Mvc;
/*
namespace EcommerceBack.Controllers
{
    [ApiController]
    [Route("api/categoria")]
    public class CategoriaController : ControllerBase
    {
        private readonly DataContext _context;
        public CategoriaController(DataContext context) => _context = context;
        
        [HttpPost]
        [Route("cadastrar")]
        public IActionResult Create([FromBody] Categoria categoria)
        {
            _context.Categorias.Add(categoria);
            _context.SaveChanges();
            return Created("", categoria);
        }

        [HttpGet]
        [Route("listar")]
        public IActionResult List() => Ok(_context.Categorias.ToList());
    }
} */