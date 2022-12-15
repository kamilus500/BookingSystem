using BookingSystem.Service.Models;
using Microsoft.Extensions.Options;
using System.ComponentModel;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace BookingSystem.Service.Services
{
    public class EmailService
    {

        private readonly SmtpSettings _smtpSettings;
        private SmtpClient _smtp;
        private MailMessage mail;

        private string _hostsSmpt;
        private bool _enableSsl;
        private int _port;
        private string _senderEmail;
        private string _senderEmailPassword;
        private string _senderName;

        public EmailService(IOptions<SmtpSettings> smtpSettings)
        {
            _smtpSettings = smtpSettings.Value;
            _hostsSmpt = _smtpSettings.hostsSmpt;
            _enableSsl = _smtpSettings.enableSsl;
            _port = _smtpSettings.port;
            _senderEmail = _smtpSettings.senderEmail;
            _senderEmailPassword = _smtpSettings.senderEmailPassword;
            _senderName = _smtpSettings.senderName;
        }

        public async Task Send(string to, string subject, string body)
        {
            mail = new MailMessage();
            mail.From = new MailAddress(_senderEmail, _senderName);
            mail.To.Add(new MailAddress(to));
            mail.Subject = subject;
            mail.IsBodyHtml = true;
            mail.BodyEncoding = System.Text.Encoding.UTF8;
            mail.SubjectEncoding = System.Text.Encoding.UTF8;
            mail.Body = body;

            _smtp = new SmtpClient()
            {
                Host = _hostsSmpt,
                EnableSsl = _enableSsl,
                Port = _port,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(_senderEmail, _senderEmailPassword)
            };

            await _smtp.SendMailAsync(mail);

            _smtp.Dispose();
        }

        
    }
}
