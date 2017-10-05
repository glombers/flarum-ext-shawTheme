<?php

namespace romanzpolski\shawTheme\Providers;

use Flarum\Foundation\AbstractServiceProvider;


class ViewProvider extends AbstractServiceProvider
{
    public function register()
    {
        dd($this);
        $this->loadViewsFrom(
            __DIR__ . '/../../assets/views',
            'romanzpolski.shawTheme'
        );
    }
}
