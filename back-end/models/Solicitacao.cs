namespace back_end.Models
{
    public class Solicitacao
    {
        public int Id { get; set; }

        public string Titulo { get; set; } = string.Empty;

        public string Solicitante { get; set; } = string.Empty;

        public string Status { get; set; } = string.Empty;
    }
}