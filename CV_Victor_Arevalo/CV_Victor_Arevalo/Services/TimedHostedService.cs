
using webapi.Controllers;

namespace webapi.Services
{
    public class TimedHostedService : IHostedService, IDisposable
    {

        private int executionCount = 0;
        private readonly ILogger<TimedHostedService> _logger;
        private Timer _timer;

        public TimedHostedService(ILogger<TimedHostedService> logger)
        {
            _logger = logger;
        }
        public void Dispose()
        {
            _timer?.Dispose();
        }

        public Task StartAsync(CancellationToken cancellationToken)
        {
            _logger.LogInformation("Timed Hosted Service running.");
            try
            {
                _timer = new Timer(DoWork, null, TimeSpan.Zero,
                TimeSpan.FromSeconds(540));
            }
            catch (Exception ex)
            {
                _logger.LogInformation("Exception: " + ex.ToString());
            }
            

            return Task.CompletedTask;
        }

        private void DoWork(object state)
        {
            try
            {
                var count = Interlocked.Increment(ref executionCount);

                _logger.LogInformation(
                    "Timed Hosted Service is working. Count: {Count}", count);

                HttpClient httpClient = new HttpClient();
                var response = httpClient.GetAsync("https://hvvamemoria.azurewebsites.net/api/personalData");
                var content = response.Result.Content.ReadAsStringAsync().Result;
                _logger.LogInformation(content);
            }
            catch (Exception ex)
            {
                _logger.LogInformation("Exception: " + ex.ToString());
            }
        }

        public Task StopAsync(CancellationToken cancellationToken)
        {
            _logger.LogInformation("Timed Hosted Service is stopping.");

            _timer?.Change(Timeout.Infinite, 0);

            return Task.CompletedTask;
        }
    }
}
