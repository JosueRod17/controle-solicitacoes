using Microsoft.AspNetCore.Mvc;
using back_end.Data;
using back_end.Models;

namespace back_end.Controllers
{
    [ApiController]
    [Route("solicitacoes")]
    public class SolicitacoesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public SolicitacoesController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_context.Solicitacoes.ToList());
        }

        [HttpPost]
        public IActionResult Post(Solicitacao solicitacao)
        {
            if (string.IsNullOrWhiteSpace(solicitacao.Titulo) ||
                string.IsNullOrWhiteSpace(solicitacao.Status))
            {
                return BadRequest("Título e status são obrigatórios.");
            }

            _context.Solicitacoes.Add(solicitacao);
            _context.SaveChanges();

            return Ok(solicitacao);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Solicitacao dadosAtualizados)
        {
            var solicitacao = _context.Solicitacoes.FirstOrDefault(s => s.Id == id);

            if (solicitacao == null)
            {
                return NotFound();
            }

            solicitacao.Status = dadosAtualizados.Status;

            _context.SaveChanges();

            return Ok(solicitacao);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var solicitacao = _context.Solicitacoes.FirstOrDefault(s => s.Id == id);

            if (solicitacao == null)
            {
                return NotFound();
            }

            _context.Solicitacoes.Remove(solicitacao);

            _context.SaveChanges();

            return NoContent();
        }
    }
}