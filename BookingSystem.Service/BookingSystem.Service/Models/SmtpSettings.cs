namespace BookingSystem.Service.Models
{
    public class SmtpSettings
    {
        public string hostsSmpt { get; set; }
        public bool enableSsl { get; set; }
        public int port { get; set; }
        public string senderEmail { get; set; }
        public string senderEmailPassword { get; set; }
        public string senderName { get; set; }
    }
}
