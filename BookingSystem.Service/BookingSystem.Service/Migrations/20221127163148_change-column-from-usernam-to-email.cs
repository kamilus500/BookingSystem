using Microsoft.EntityFrameworkCore.Migrations;

namespace BookingSystem.Service.Migrations
{
    public partial class changecolumnfromusernamtoemail : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UserName",
                table: "Users",
                newName: "Email");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Email",
                table: "Users",
                newName: "UserName");
        }
    }
}
