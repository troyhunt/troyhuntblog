using System;
using System.Web;
using System.Web.Optimization;
using Web.App_Start;

namespace Web
{
  public class Global : HttpApplication
  {
    protected void Application_Start(object sender, EventArgs e)
    {
      BundleConfig.RegisterBundles(BundleTable.Bundles);
    }
  }
}