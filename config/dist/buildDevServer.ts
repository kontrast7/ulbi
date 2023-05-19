import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        open: false,
        // * Делает доступными разу все роуты, а не только через главный роут (/)
        historyApiFallback: true,
        // * Для отображения изменений без перезагрузки страницы
        hot: true,
    };
}
