import appSettings from '../../scripts/settings/appSettings';
import { Events } from 'jellyfin-apiclient';
import browser from '../../scripts/browser';
import loading from '../loading/loading';
import { playbackManager } from '../playback/playbackmanager';
import { appRouter } from '../appRouter';
import globalize from '../../scripts/globalize';
import { appHost } from '../apphost';
import { enable, isEnabled, supported } from '../../scripts/autocast';
import dialog from '../dialog/dialog';
import dialogHelper from '../dialogHelper/dialogHelper';

function emptyCallback() {
    // avoid console logs about uncaught promises
}

export function show(button) {
    loading.show();
}

