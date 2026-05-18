using Microsoft.EntityFrameworkCore;
using back_end.Models;

namespace back_end.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public DbSet<Solicitacao> Solicitacoes { get; set; }
    }
}