// =================================================================================
// This is auto-generated by GoFrame CLI tool only once. Fill this file as you wish.
// =================================================================================

package dao

import (
	"github.com/sagoo-cloud/sagooiot/internal/dao/internal"
)

// internalNetworkTunnelDao is internal type for wrapping internal DAO implements.
type internalNetworkTunnelDao = *internal.NetworkTunnelDao

// networkTunnelDao is the data access object for table network_tunnel.
// You can define custom methods on it to extend its functionality as you wish.
type networkTunnelDao struct {
	internalNetworkTunnelDao
}

var (
	// NetworkTunnel is globally public accessible object for table network_tunnel operations.
	NetworkTunnel = networkTunnelDao{
		internal.NewNetworkTunnelDao(),
	}
)

// Fill with you ideas below.