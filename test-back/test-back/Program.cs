using test_back.Domain.Config;
using test_back.Infrastructure;
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", builder =>
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader());
});

builder.Services.AddControllers();


builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.Configure<configValues>(builder.Configuration.GetSection("KeyVaultConfig"));
builder.Services.AddInfrastructureServices();
var app = builder.Build();
app.UseCors("AllowAll");
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();  
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Web API v1");  
    });
}
app.MapGet("/", () => "please search /swagger");
app.UseHttpsRedirection();
app.MapControllers();
app.Run();
