using webapi.Models;
using Microsoft.EntityFrameworkCore;

namespace webapi.PersistenceContext
{
    public class PersistenceContext : DbContext
    {
        private readonly IConfiguration Config;

        public PersistenceContext(DbContextOptions<PersistenceContext> options, IConfiguration config) : base(options)
        {
            Config = config;
        }

        public async Task CommitAsync()
        {
            await SaveChangesAsync().ConfigureAwait(false);
        }

        public DbSet<PersonalData> PersonalData { get; set; }
        public DbSet<SummaryData> SummaryData { get; set; }
        public DbSet<TypeTraining> TypeTraining { get; set; }
        public DbSet<ModalityTraining> ModalityTraining { get; set; }
        public DbSet<EducationData> EducationData { get; set;}
        public DbSet<Skill> Skill { get; set; }
        public DbSet<DetailSummary> DetailSummarie { get; set; }
        public DbSet<ExperienceData> ExperienceData { get; set; }

        public DbSet<PersonalReference> personalReference { get; set; }
    }
}
