using Microsoft.EntityFrameworkCore.Migrations;

namespace BookingSystem.Service.Migrations
{
    public partial class AddFinishcolumnforordertable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsEnd",
                table: "Orders",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsEnd",
                table: "Orders");
        }
    }
}
