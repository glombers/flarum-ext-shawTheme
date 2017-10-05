<?php

namespace romanzpolski\shawTheme\Listeners;

use Flagrow\UserDirectory\Http\Controllers\UserDirectoryController;
use Flarum\Event\ConfigureForumRoutes;
use Illuminate\Contracts\Events\Dispatcher;

class AddWebRoutes
{

    dd('kutas');
    /**
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(ConfigureForumRoutes::class, [$this, 'addDirectoryPage']);
    }

    /**
     * @param ConfigureForumRoutes $event
     */
    public function addDirectoryPage(ConfigureForumRoutes $event)
    {
        $event->get(
            '/shaw',
            'shawIndex',
            IndexController::class
        );
    }
}
