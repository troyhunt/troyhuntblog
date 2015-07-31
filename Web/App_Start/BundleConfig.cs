using System.Web.Optimization;

namespace Web.App_Start
{
  public class BundleConfig
  {
    public static void RegisterBundles(BundleCollection bundles)
    {
      bundles.Add(new ScriptBundle("~/html5shiv").Include(
                  "~/Scripts/html5shiv.js"));

      bundles.Add(new ScriptBundle("~/Script").Include(
                  "~/Scripts/modernizr-*",
                  "~/Scripts/TroyHunt.js"));

      bundles.Add(new StyleBundle("~/Style").Include("~/TroyHunt.css"));
    }
  }
}