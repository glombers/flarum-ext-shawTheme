<?php
namespace romanzpolski\shawTheme;

ini_set('display_errors', 'On');



use Flarum\Event\ConfigureClientView;
use Illuminate\Contracts\Events\Dispatcher;
use Flarum\Foundation\Application;

return function (Dispatcher $events, Application $app) {
   $events->listen(ConfigureClientView::class, function (ConfigureClientView $event) {
       if ($event->isForum()) {
           $event->addAssets([
               __DIR__ . '/js/forum/dist/extension.js',
               __DIR__ . '/less/forum/extension.less',
           ]);
           $event->addBootstrapper('romanzpolski/shawTheme/main');
       }
   });
};