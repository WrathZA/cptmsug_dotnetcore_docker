using DbUp;
using DbUp.Helpers;
using System;
using System.Reflection;

namespace NorthWind.Data.Migrations
{
    class Program
    {
        static int Main(string[] args)
        {
            var connectionString = "Server=mssql;User Id=sa;Password=yourStrong(!)Password";

            var upgrader =
               DeployChanges.To
                   .SqlDatabase(connectionString)
                   .WithScriptsEmbeddedInAssembly(Assembly.GetExecutingAssembly())
                   .JournalTo(new NullJournal())
                   .LogToConsole()
                   .LogScriptOutput()
                   .Build();

            var result = upgrader.PerformUpgrade();

            if (!result.Successful)
            {
                Console.ForegroundColor = ConsoleColor.Red;
                Console.WriteLine(result.Error);
                Console.ResetColor();
                return -1;
            }

            Console.ForegroundColor = ConsoleColor.Green;
            Console.WriteLine("Success!");
            Console.ResetColor();
            return 0;
        }
    }
}
