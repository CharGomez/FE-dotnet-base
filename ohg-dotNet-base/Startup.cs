using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ohg_dotNet_base.Startup))]
namespace ohg_dotNet_base
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
