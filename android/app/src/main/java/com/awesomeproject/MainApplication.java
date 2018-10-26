package com.awesomeproject;

import android.support.annotation.Nullable;
import com.facebook.react.ReactPackage;
import com.reactnativenavigation.NavigationApplication;
import java.util.Arrays;
import java.util.List;
import com.facebook.soloader.SoLoader;

public class MainApplication extends NavigationApplication  {

  @Override
  public String getJSMainModuleName() {
    return "index";
  }

  @Override
  public boolean isDebug() {
    return BuildConfig.DEBUG;
  }

  @Nullable
  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
    return getPackages();
  }

  protected List<ReactPackage> getPackages() {
    // Add additional packages you require here
    // No need to add RnnPackage and MainReactPackage
    return Arrays.<ReactPackage>asList(
            // eg. new VectorIconsPackage()
    );
  }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);
    }
}
